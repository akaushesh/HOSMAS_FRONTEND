import PropTypes from "prop-types";
import DomainIcon from "@mui/icons-material/Domain";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import { useProfile } from "src/hooks/use-auth";

export const OverviewBudget = (props) => {
  const user = useProfile();
  const { sx, allotedHostel = "", academicSession = "" } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Allotted Hostel
            </Typography>
            <Typography variant="h4">
              {allotedHostel === ""
                ? "None"
                : `${allotedHostel} ${
                    user?.user?.alloted_room?.number ? user?.user?.alloted_room?.number : ""
                  }`}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <DomainIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          <Typography color={allotedHostel ? "success.main" : "error.main"} variant="caption">
            {allotedHostel
              ? `Hostel allottment completed for ${academicSession}`
              : `Hostels allotment not completed for ${academicSession}`}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};
