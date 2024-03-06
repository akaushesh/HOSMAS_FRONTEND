import { Button, Card, Grid } from "@mui/material";
import { HostelDetails } from "./hostel-details";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useState } from "react";

export const CurrentPreference = ({ availableChoices }) => {
  const [items, setItems] = useState(availableChoices);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function printItems() {
    console.log(items);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <Card sx={{ margin: "0 4rem" }}>
      <Grid container>
        <HostelDetails />
        <Grid item padding="2rem" xs={6}>
          <Grid container justifyContent="center" flexDirection="column" spacing={1}>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                  <SortableItem
                    key={item.id}
                    id={item.id}
                    choice_id={item.choice_id}
                    room_hostel={item.room_hostel}
                    room_name={item.room_name}
                  />
                ))}
              </SortableContext>
            </DndContext>
            <Grid item sx={{ marginTop: "0.5rem" }}>
              <Button onClick={printItems} fullWidth variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
