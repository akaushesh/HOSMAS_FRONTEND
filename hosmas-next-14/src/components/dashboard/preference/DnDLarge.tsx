import * as React from 'react';
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import { ArrowRight } from '@phosphor-icons/react';

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

export default function DnDLarge({
  isLoadingPreferences,
  isLoadingChoices,
  data1,
  data2,
  NotAllowed,
  setD1,
  setD2,
}: DndProps): React.JSX.Element {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getPos = (id: number, data: Card[]): number => {
    return data.findIndex((item: Card) => item.id === id);
  };

  const handleDragEndNOver = (event: DndEvent): void => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeCollumn = active.data.current.sortable.containerId;
    const overCollumn = over.data.current.sortable.containerId;

    // Inside Same Column
    if (activeCollumn === overCollumn) {
      if (activeCollumn === 'collumn1') {
        setD1(arrayMove(data1, getPos(activeId, data1), getPos(overId, data1)));
      } else {
        setD2(arrayMove(data2, getPos(activeId, data2), getPos(overId, data2)));
      }
    } else if (activeCollumn === 'collumn1') {
      const card = data1[getPos(activeId, data1)];
      setD1(data1.filter((item) => item.id !== activeId));
      data2.splice(getPos(overId, data2), 0, card);
      setD2([...data2]);
    } else {
      const card = data2[getPos(activeId, data2)];
      setD2(data2.filter((item) => item.id !== activeId));
      data1.splice(getPos(overId, data1), 0, card);
      setD1([...data1]);
    }
  };

  return (
    <Box sx={{ position: 'relative' }} width="70vw">
      <DndContext
        onDragEnd={(event: DndEvent) => {
          handleDragEndNOver(event);
        }}
        onDragOver={(event: DndEvent) => {
          handleDragEndNOver(event);
        }}
        sensors={sensors}
        collisionDetection={closestCorners}
        modifiers={[restrictToWindowEdges]}
        width="100%"
      >
        <Box
          sx={{
            display: 'flex',
            // display: { lg: 'none', xs: 'flex' },
            justifyContent: 'space-between',
            opacity: NotAllowed ? 0.45 : 1,
            pointerEvents: NotAllowed ? 'none' : 'initial',
            color: 'var(--Card-FontColor)',
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: '37%',
              minHeight: '60vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingChoices ? 'center' : 'space-between',
              color: 'var(--Card-FontColor)',
            }}
          >
            {isLoadingChoices ? <CircularProgress color="inherit" /> : null}

            {!isLoadingChoices && (
              <>
                <Typography variant="overline" sx={{ textAlign: 'left', mb: 2 }} width={1}>
                  You have selected {data2.length} out of {data1.length + data2.length} items.
                </Typography>
                <Collumn id="collumn1" main={data1} second={data2} />
              </>
            )}
          </Paper>

          <Box
            height="60vh"
            width={0.1}
            fontSize="40px"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ArrowRight />
          </Box>

          <Paper
            elevation={4}
            sx={{
              width: '37%',
              minHeight: '60vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingPreferences ? 'center' : 'space-between',
              color: 'var(--Card-FontColor)',
            }}
          >
            {isLoadingPreferences ? <CircularProgress color="inherit" /> : null}

            {!isLoadingPreferences && (
              <>
                <Typography variant="overline" sx={{ textAlign: 'left', mb: 2 }} width={1}>
                  Arrange your preferences here.
                </Typography>
                <Collumn id="collumn2" main={data2} second={data1} />
              </>
            )}
          </Paper>
        </Box>
      </DndContext>
    </Box>
  );
}
