import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { Card, Grid } from "@mui/material";
import { useAvailableChoices } from "src/hooks/use-preference";

export const TestPreferenceCard = ({ availableChoices }) => {
  const [items, setItems] = useState(availableChoices);
  console.log(items);
  // const [items, setItems] = useState([
  //   { id: 1, choice_id: 1 },
  //   { id: 2, choice_id: 2 },
  //   { id: 3, choice_id: 3 },
  //   { id: 4, choice_id: 4 },
  // ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.choice_id === active.id);
        const newIndex = items.findIndex((item) => item.choice_id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <Card sx={{ margin: "0 4rem" }}>
      <Grid container>
        <Grid item padding="2rem" xs={6}></Grid>
        <Grid item padding="2rem" xs={6}>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {items.map((item) => (
                <SortableItem key={item.id} id={item.id} choice_id={item.choice_id} />
              ))}
            </SortableContext>
          </DndContext>
        </Grid>
      </Grid>
    </Card>
  );
};
