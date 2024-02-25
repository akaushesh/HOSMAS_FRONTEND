import { Card, Grid, Typography } from "@mui/material";
import { useAvailableChoices } from "src/hooks/use-preference";
import { HostelCard } from "./hostel-card";
import { Droppable } from "src/components/droppable";
import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { PreferenceList } from "./preference-list";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export const PreferenceCard = () => {
  // const availableChoices = useAvailableChoices();
  const [preference, setPreference] = useState();
  // console.log(availableChoices);
  const availableChoices = {
    availableChoices: [
      {
        choice_id: 1,
        room_hostel: "O",
        room_name: "2S",
      },
      {
        choice_id: 2,
        room_hostel: "M",
        room_name: "2S",
      },
      { choice_id: 3, room_hostel: "O", room_name: "1S" },
    ],
  };

  // const getPreferencePos = (id) => {
  //   preference.findIndex((pref) => pref.id === id);
  // };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <Card sx={{ margin: "0 4rem" }}>
      <Grid container>
        <Grid padding="2rem" item xs={6}></Grid>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <PreferenceList availableChoices={availableChoices.availableChoices} />
        </DndContext>
      </Grid>
    </Card>
  );
};
