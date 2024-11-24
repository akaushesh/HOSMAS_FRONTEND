import * as React from 'react';
import { CalendarToday } from '@mui/icons-material';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { Box, Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';

export default function LeaveDetails(): React.JSX.Element {
  return (
    <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={2}>
        <Grid textAlign="center" item xs={3}>
          <CalendarToday sx={{ fontSize: '2.5rem' }} />
        </Grid>
        <Grid item xs={9}>
          <Grid container justifyContent="space-between" alignItems="center" mb={3}>
            <Grid ml="10%" item textAlign="center">
              <Typography variant="h6">06/09</Typography>
              <Typography variant="body2">Dept</Typography>
            </Grid>
            <Grid item xs={4} sx={{ position: 'relative' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#E5E5E5',
                  position: 'absolute',
                  top: '50%',
                }}
              />
            </Grid>
            <Grid item textAlign="center">
              <Typography variant="h6">10/09</Typography>
              <Typography variant="body2">Arrival</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Paper
        elevation={2}
        sx={{ backgroundColor: '#fff', mb: 4, p: 2, width: '80%', ml: '50%', transform: 'translateX(-50%)' }}
      >
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="bold">
              Reason :
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" mb={1}>
              Going Home
            </Typography>
          </Grid>
        </Grid>

        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="bold">
              Place of Visit :
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" mb={1}>
              Chandigarh
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            type="date"
            sx={{ height: '100%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button
                    variant="contained"
                    sx={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      height: '3rem',
                      ml: '-1rem',
                    }}
                  >
                    <FormatIndentIncreaseIcon />
                  </Button>
                </InputAdornment>
              ),
              sx: { height: '3rem' },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" fullWidth sx={{ height: '3rem' }}>
            {/* <CancelIcon /> */}
            <Typography fontSize="1.2rem" fontWeight="bold" ml={1}>
              Cancel
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
