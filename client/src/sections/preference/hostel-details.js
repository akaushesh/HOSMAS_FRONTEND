import { Grid, Typography } from "@mui/material";
import Hostel_M_Map from "public/assets/hostels/Hostel_M_Map.jpg";
import Image from "next/image";

export const HostelDetails = () => {
  return (
    <Grid item padding="2rem" xs={6}>
      <Image
        src={Hostel_M_Map}
        alt="Alloted Hostel Map"
        priority="false"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
      <Typography variant="h3" marginBottom="1rem">
        Hostel M
      </Typography>
      <Typography variant="body2" marginBottom="1rem">
        Adipisicing velit ex non ipsum elit dolore. Cupidatat tempor duis eu anim cillum ipsum
        magna. Magna quis Lorem deserunt officia. Incididunt veniam sit ut sint.
      </Typography>
      <Typography variant="body2">Washroom: Attached shared by 4</Typography>
      <Typography variant="body2">Price: 56000</Typography>
      <Typography variant="body2">Warden: Dr Sachin Kansal</Typography>
      <Typography variant="body2">Contact: 9044718965</Typography>
    </Grid>
  );
};
