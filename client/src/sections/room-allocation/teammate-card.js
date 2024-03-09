import { Button, Card, Divider, Grid } from "@mui/material";

export const TeammateCard = ({
  name,
  rollNumber,
  current_room = "free",
  selected_room,
  allotRoom,
}) => {
  const onClick = () => {
    allotRoom(rollNumber, selected_room);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    >
      <Grid sx={{ padding: "1rem 0" }} container alignItems="center">
        <Grid item xs={8}>
          {name}
        </Grid>
        <Grid textAlign="right" item xs={4}>
          <Button sx={{ padding: "0.1rem", borderRadius: "4rem" }} variant="outlined">
            {current_room}
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
};
