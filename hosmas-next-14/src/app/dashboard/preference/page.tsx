'use client';

import React, { useState } from 'react';
import { closestCorners, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

import Collumn from './Components/Collumn';
import styles from './page.module.css';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

interface Card {
  logo: string;
  id: string;
  content: string;
}

const cards1: Card[] = [
  { logo:'1S',id: 'card1', content: 'Card 1' },
  { logo:'2S',id: 'card2', content: 'Card 2' },
  { logo:'3S',id: 'card3', content: 'Card 3' },
  { logo:'1S',id: 'card4', content: 'Card 4' },
  { logo:'2S',id: 'card5', content: 'Card 5' },
  { logo:'3S',id: 'card6', content: 'Card 6' },
  { logo:'4S',id: 'card7', content: 'Card 7' },
];

const cards2: Card[] = [
  { logo:'2S',id: 'card8', content: 'Card 8' },
  { logo:'1S',id: 'card9', content: 'Card 9' },
  { logo:'3S',id: 'card10', content: 'Card 10' },
  { logo:'4S',id: 'card11', content: 'Card 11' },
  { logo:'4S',id: 'card12', content: 'Card 12' },
  { logo:'4S',id: 'card13', content: 'Card 13' },
];

const page = () => {
  const [data1, setData1] = useState<Card[]>(cards1);
  const [data2, setData2] = useState<Card[]>(cards2);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getPos = (id: string, data: Card[]): number => {
    return data.findIndex((item) => item.id === id);
  };

  const handleDragEndNOver = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeCollumn = active.data.current.sortable.containerId;
    const overCollumn = over.data.current.sortable.containerId;

    // Inside Same Collumn
    if (activeCollumn === overCollumn) {
      if (activeCollumn === 'collumn1') {
        setData1((data) => arrayMove(data, getPos(activeId, data1), getPos(overId, data1)));
      } else {
        setData2((data) => arrayMove(data, getPos(activeId, data2), getPos(overId, data2)));
      }
    } else {
      if (activeCollumn === 'collumn1') {
        let card = data1[getPos(activeId, data1)];
        setData1((data) => data.filter((item) => item.id !== activeId));
        data2.splice(getPos(overId, data2), 0, card);
        setData2((data) => [...data2]);
      } else {
        let card = data2[getPos(activeId, data2)];
        setData2((data) => data.filter((item) => item.id !== activeId));
        data1.splice(getPos(overId, data1), 0, card);
        setData1((data) => [...data1]);
      }
    }
  };

  const [disabled, setDisabled] = useState(false);

  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h2" sx={{ color: 'inherit' }}>
            Hostel Preference Order
          </Typography>
          <Typography>Drag and Drop your hostel preferences in order</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', mb: 1 }} gap={2}>
          <Button sx={{ px: 7, fontSize: 16 }} color="inherit" variant="contained">
            RESET
          </Button>
          <Button sx={{ px: 7, fontSize: 16 }} disabled={disabled} color="inherit" variant="contained">
            SAVE
          </Button>
        </Box>
      </Box>

      <DndContext
        onDragEnd={handleDragEndNOver}
        onDragOver={handleDragEndNOver}
        sensors={sensors}
        collisionDetection={closestCorners}
        modifiers={[restrictToWindowEdges]}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>


          <Paper
            elevation={4}
            sx={{
              width: '30%',
              height: '65vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="overline" sx={{ textAlign:"left" , mb:2 }} width={1} >
              You have selected {data2.length} out of {data1.length + data2.length} items.
            </Typography>
            <Collumn id={'collumn1'} main={data1} second={data2} />
          </Paper>

          <Paper
            elevation={4}
            sx={{
              width: '30%',
              height: '65vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="overline" sx={{ textAlign:"left" , mb:2 }} width={1} >
              Arrange your preferences here.
            </Typography>
            <Collumn id={'collumn2'} main={data2} second={data1} />
          </Paper>


        </Box>
      </DndContext>
    </Stack>
  );
};

export default page;
