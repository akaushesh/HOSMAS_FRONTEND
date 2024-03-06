import { LoadingButton } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import { useProfile } from "src/hooks/use-auth";
import { TeammateCard } from "./teammate-card";

export const MemberAssingn = ({ onClose, roomDetails, allotRoom }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const user = useProfile();
  console.log(user);

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Assign room to
      </Typography>

      <Grid container>
        <TeammateCard
          allotRoom={allotRoom}
          onClose={onClose}
          name="Harsiddak Singh Bedi"
          room="Q102"
        />
        <TeammateCard
          allotRoom={allotRoom}
          onClose={onClose}
          name="Arvinder Singh Kandola"
          room="Q103"
        />
        <TeammateCard
          allotRoom={allotRoom}
          onClose={onClose}
          name="Chandravo Bhattacharya"
          room="Q104"
        />
      </Grid>
    </Box>
  );
};
