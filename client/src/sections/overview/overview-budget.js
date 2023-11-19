import PropTypes from "prop-types";
import DomainIcon from "@mui/icons-material/Domain";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";

export const OverviewBudget = (props) => {
  const { sx, allotedHostel } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Allotted Hostel
            </Typography>
            <Typography variant="h4">
              {allotedHostel === "" ? "None" : `Hostel ${allotedHostel}`}
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
              {/* <CurrencyDollarIcon /> */}
              <DomainIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          <Typography color={allotedHostel ? "success.main" : "error.main"} variant="caption">
            {allotedHostel
              ? "Hostel allottment has been completed"
              : "Hostels have not been allotted yet"}
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
