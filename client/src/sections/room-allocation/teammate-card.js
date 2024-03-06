import { Button, Card, Divider, Grid } from "@mui/material";

export const TeammateCard = ({ name, room, allotRoom }) => {
  const onClick = () => {
    console.log("clicked");
    allotRoom();
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
      onClick={allotRoom}
    >
      <Grid sx={{ padding: "1rem 0" }} container alignItems="center">
        <Grid item xs={8}>
          {name}
        </Grid>
        <Grid textAlign="right" item xs={4}>
          <Button sx={{ padding: "0.1rem", borderRadius: "4rem" }} variant="outlined">
            {room}
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
};
