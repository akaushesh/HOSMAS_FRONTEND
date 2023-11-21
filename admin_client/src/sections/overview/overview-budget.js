import PropTypes from "prop-types";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import DomainIcon from "@mui/icons-material/Domain";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import { useState } from "react";

export const OverviewBudget = (props) => {
  const { sx } = props;
  const allottedHostel = useState("M");

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Allotted Hostel
            </Typography>
            <Typography variant="h4">
              {allottedHostel[0] === "" ? "None" : `Hostel ${allottedHostel[0]}`}
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
          {/* <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={positive ? "success" : "error"} fontSize="small">
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography color={positive ? "success.main" : "error.main"} variant="body2">
                {difference}%
              </Typography>
            </Stack> */}
          <Typography color={allottedHostel[0] ? "success.main" : "error.main"} variant="caption">
            {allottedHostel[0]
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
