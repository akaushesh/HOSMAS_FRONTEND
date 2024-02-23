import { Card, Grid } from "@mui/material";
import { useAvailableChoices } from "src/hooks/use-preference";
import { HostelCard } from "./hostel-card";
import { Droppable } from "src/components/droppable";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

export const PreferenceCard = () => {
  const availableChoices = useAvailableChoices();
  const [preference, setPreference] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);
  console.log(availableChoices);

  return (
    <Card sx={{ margin: "0 4rem" }}>
      <DndContext collisionDetection="closestCorners">
        <Grid container>
          <Grid padding="2rem" item xs={6}></Grid>
          <Grid padding="2rem" item xs={6}>
            <Grid container></Grid>
            {availableChoices?.availableChoices?.map((choice, index) => (
              <Grid item key={choice.choice_id}>
                <Droppable id={choice.choice_id} key={choice.choice_id}>
                  <HostelCard hostel={choice} />
                </Droppable>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </DndContext>
    </Card>
  );
};
