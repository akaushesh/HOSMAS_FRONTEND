import React from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Grid, Typography } from "@mui/material";

export function SortableItem({ choice_id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: choice_id,
  });

  console.log(choice_id);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} {...attributes} {...listeners} sx={{ padding: "1rem" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container flexDirection="column">
            <Grid item>
              <Typography component="h4" variant="h6" mb={2}>
                Hostel B 2S
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="grey">
                Attached toilet 4 sharing
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <DragHandleIcon />
        </Grid>
      </Grid>
    </Card>
  );
}
