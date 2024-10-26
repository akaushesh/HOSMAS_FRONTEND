'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, CircularProgress, Divider, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { type QRDataProps } from './Laundry';

interface LaundryFormProps {
  data: QRDataProps | null;
  setPageState: (val: number) => void;
}

export default function LaundryData({ data, setPageState }: LaundryFormProps): React.JSX.Element {
  const timeCount = 5;
  const [success, setSuccess] = React.useState(false);
  const [timer, setTimer] = React.useState(timeCount);

  const [laundryData, setLaundryData] = React.useState<Record<string, number>>({
    Jeans: 0,
    Pants: 0,
    Pyjama: 0,
    Shorts: 0,
    Shirts: 0,
    'T-Shirts': 0,
    'Kurta/Salwar': 0,
    Skirt: 0,
    Dupatta: 0,
    'Bed Sheet': 0,
    'Pillow Cover': 0,
    'Towel/H-Towel': 0,
    Turban: 0,
    'Upper Hood': 0,
  });
  const totalClothes = Object.values(laundryData).reduce((total, count) => total + count, 0);

  const handleSubmit = (): void => {
    setSuccess(true);
    setTimer(timeCount);
  };

  const handleSkip = (): void => {
    setPageState(1);
  };

  React.useEffect(() => {
    // eslint-disable-next-line no-undef -- setInterval is a NodeJS API
    let countdownInterval: NodeJS.Timeout;

    if (success && timer > 0) {
      countdownInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      setSuccess(false);
      setPageState(1);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [success, timer, setPageState]);

  return (
    <Stack alignItems="center">
      <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 1, py: 0, alignSelf: 'flex-start' }}
        onClick={() => {
          setPageState(0);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          back to main page
        </Typography>
      </Button>

      {success ? (
        <Stack alignItems="center" py="50%">
          <Typography variant="h5" fontSize="27px" px={1} fontWeight={600}>
            Laundry Submitted
          </Typography>
          
          <Stack mt={3} direction="row" alignItems="center" justifyContent="center">
            <Typography variant="body1" color="var(--mui-palette-primary-main)" px={1} fontWeight={600}>
              Redirecting in {timer} seconds
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={(100 / timeCount) * (timeCount - timer + 1)} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1" component="div" sx={{ color: 'var(--mui-palette-primary-main)', fontWeight:600 }}>
                  {timer}
                </Typography>
              </Box>
            </Box>
            
          </Stack>
          <Button
            variant="outlined"
            onClick={handleSkip}
            sx={{
              fontWeight: 500,
              borderRadius: 1,
              border: '1px solid var(--mui-palette-primary-main)',
              px: 6,
              py: 0.3,
              mt: 1,
            }}
          >
            Skip
          </Button>
        </Stack>
      ) : (
        <Box mt={2.5}>
          <Typography variant="h5" px={1} fontWeight={600}>
            Verify Laundry 
          </Typography>
          <Typography variant="body1" px={2} color="var(--mui-palette-primary-main)">{data?.LaundryId} 
          </Typography>
          <Stack mt={2} px={1.5}>
            <Grid container spacing={1}>
              {Object.keys(laundryData).map((item) => {
                // const isEven=index%2===0;

                return (
                  <Grid item xs={12} md={6} key={item}>
                    <Box>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        gap={6}
                        sx={{
                          background: 'var(--mui-palette-secondary-light)',
                          border: '1px solid var(--mui-palette-secondary-main)',
                          borderRadius: 1,
                          px: 2,
                          py: 0.5,
                        }}
                      >
                        <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>
                          {item}
                        </Typography>

                        <Stack
                          sx={{ justifySelf: 'flex-end' }}
                          direction="row"
                          justifyContent="flex-right"
                          alignItems="center"
                          gap={1}
                        >
                          <IconButton
                            disabled={laundryData[item] <= 0}
                            onClick={() => {
                              setLaundryData({ ...laundryData, [item]: laundryData[item] - 1 });
                            }}
                            sx={{
                              py: 0.7,
                              color: 'var(--mui-palette-primary-main)',
                              '&:disabled': {
                                color: 'var(--mui-palette-secondary-dark)',
                                // border: '1px solid var(--mui-palette-secondary-main)',
                                opacity: 0.8,
                              },
                            }}
                          >
                            <Typography variant="h6">-</Typography>
                          </IconButton>

                          <Paper
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 0.8,
                              px: 0.8,
                              border: '1px solid var(--mui-palette-secondary-main)',
                              py: 0.15,
                            }}
                          >
                            {laundryData[item]}
                          </Paper>

                          <IconButton
                            disabled={totalClothes >= 10}
                            onClick={() => {
                              setLaundryData({ ...laundryData, [item]: laundryData[item] + 1 });
                            }}
                            sx={{
                              py: 0.7,
                              color: 'var(--mui-palette-primary-main)',
                              '&:disabled': {
                                color: 'var(--mui-palette-secondary-dark)',
                                // border: '1px solid var(--mui-palette-secondary-main)',
                                opacity: 0.8,
                              },
                            }}
                          >
                            <Typography variant="h6">+</Typography>
                          </IconButton>
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            <Divider />
            <Stack direction="row" justifyContent="flex-end" gap={2} sx={{ mt: 2, mb: 3 }}>
              <Button
                onClick={() => {
                  setPageState(1);
                }}
                sx={{
                  fontWeight: 600,
                  borderRadius: 1,
                  px: 5,
                  background: 'var(--mui-palette-secondary-dark)',
                  color: 'var(--mui-palette-common-white)',
                  '&:hover': { background: 'var(--mui-palette-secondary-main)' },
                }}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
                disabled={totalClothes <= 0}
                sx={{
                  fontWeight: 600,
                  borderRadius: 1,
                  px: 5,
                }}
              >
                Verify
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Stack>
  );
}
