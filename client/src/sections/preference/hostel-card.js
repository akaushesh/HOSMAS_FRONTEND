import { Card, Grid, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import DragHandleIcon from "@mui/icons-material/DragHandle";

export const HostelCard = (props) => {
  const { choice_id, room_hostel, room_name } = props.hostel;
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: "unique-id",
  });

  return (
    <Card ref={setNodeRef} sx={{ padding: "1rem" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container flexDirection="column">
            <Grid item>
              <Typography component="h4" variant="h6" mb={2}>
                {room_hostel} {room_name}
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
          <DragHandleIcon {...listeners} {...attributes} />
        </Grid>
      </Grid>
    </Card>
  );
};
