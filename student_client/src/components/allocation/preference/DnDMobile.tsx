import * as React from 'react';
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';

import Collumn from './Collumn';

interface Card {
  logo: string;
  id: number;
  room: string;
  hostel: string;
  priority: number;
}

interface DndEvent {
  active: SubDndEvent;
  over: SubDndEvent;
}
interface SubDndEvent {
  id: number;
  data: { current: { sortable: { containerId: string } } };
}

interface DndProps {
  isLoadingPreferences: boolean;
  isLoadingChoices: boolean;
  data1: Card[];
  data2: Card[];
  NotAllowed: boolean;
  setD1: (data: Card[]) => void;
  setD2: (data: Card[]) => void;
}

export default function DnDMobile({
  isLoadingPreferences,
  isLoadingChoices,
  data1,
  data2,
  NotAllowed,
  setD1,
  setD2,
}: DndProps): React.JSX.Element {
    
    const tasks=[...data2,...data1]

    const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id:number):number => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: any): void  => {
    const { active, over } = event;
    if (!over) return;

    if (active.id === over.id) return;

    const originalPos = getTaskPos(active.id as number);
    const newPos = getTaskPos(over.id as number);
    setD2(arrayMove(tasks, originalPos, newPos));
    setD1([]);
  };

  return (
    <Box sx={{ position: 'relative' }} >
      <DndContext
        onDragEnd={(event) => {
          handleDragEnd(event);
        }}
        sensors={sensors}
        collisionDetection={closestCorners}
        modifiers={[restrictToVerticalAxis]}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            opacity: NotAllowed ? 0.45 : 1,
            pointerEvents: NotAllowed ? 'none' : 'initial',
            color: 'var(--Card-FontColor)',
          }}
        >

          <Paper
            elevation={4}
            sx={{
              width: '90%',
              minHeight: '48vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingPreferences ? 'center' : 'space-between',
              color: 'var(--Card-FontColor)',
            }}
          >
            {(isLoadingPreferences&&isLoadingChoices) ? <CircularProgress color="inherit" /> :  (
              <>
                <Typography variant="overline" sx={{ textAlign: 'left', mb: 2 }} width={1}>
                  Arrange your preferences here.
                </Typography>
                <Collumn id="collumn2" main={[...data2,...data1]} second={data1} />
              </>
            )}
          </Paper>
        </Box>
      </DndContext>
    </Box>
  );
}
