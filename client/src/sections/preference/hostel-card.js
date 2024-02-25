import { Card, Grid, Typography } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const HostelCard = (props) => {
  const { choice_id, room_hostel, room_name } = props.hostel;
  const { attributes, listeners, setNodeRef, transition, transform } = useSortable({
    id: choice_id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Grid
      sx={{ touchAction: "none" }}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      item
    >
      <Card sx={{ padding: "1rem" }}>
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
            <DragHandleIcon />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
