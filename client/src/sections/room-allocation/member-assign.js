import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import { useProfile } from "src/hooks/use-auth";
import { TeammateCard } from "./teammate-card";
import { useGroups } from "src/hooks/use-groups";

export const MemberAssingn = ({ onClose, selected_room, allotRoom }) => {
  const user = useProfile();
  console.log(user);

  const { group, isLoading } = useGroups();
  console.log(group);

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Assign room to
      </Typography>

      <Grid container justifyContent="center" alignItems="center">
        {isLoading && <CircularProgress />}
        {group && (
          <Fragment>
            <TeammateCard
              allotRoom={allotRoom}
              onClose={onClose}
              name={group?.leader?.name}
              rollNumber={group?.leader?.rollno}
              current_room={group?.leader?.alloted_room?.number}
              selected_room={selected_room}
            />
            {group?.members.map((member) => (
              <TeammateCard
                key={member.rollno}
                allotRoom={allotRoom}
                onClose={onClose}
                name={member.name}
                rollNumber={member.rollno}
                current_room={member.alloted_room?.number}
                selected_room={selected_room}
              />
            ))}
          </Fragment>
        )}
      </Grid>
    </Box>
  );
};
