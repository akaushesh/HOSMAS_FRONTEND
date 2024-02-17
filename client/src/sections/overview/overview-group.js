import PropTypes from "prop-types";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import { useIsPreferenceFillingLive } from "src/hooks/use-preference";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";

export const OverviewTotalCustomers = (props) => {
  const { sx, memberCount = 0, preferenceFilled = false } = props;
  const { isLive } = useIsPreferenceFillingLive();

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Your Group
            </Typography>
            <Typography variant="h4">
              {memberCount <= 1 ? "None" : `${memberCount} people`}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "success.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          {!isLive ? (
            <Typography color="error.main" variant="caption">
              Preference filling not live
            </Typography>
          ) : (
            <Typography color={preferenceFilled ? "success.main" : "error.main"} variant="caption">
              {preferenceFilled
                ? "Preferences have been filled"
                : "Preferences have not been filled"}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTotalCustomers.propTypes = {
  sx: PropTypes.object,
};
