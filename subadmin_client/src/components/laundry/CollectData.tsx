'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, CircularProgress, Divider, Grid, Stack, Typography } from '@mui/material';

import { type QRDataProps } from './Laundry';

interface LaundryFormProps {
  data: QRDataProps | null;
  setPageState: (val: number) => void;
}

export default function CollectData({ data, setPageState }: LaundryFormProps): React.JSX.Element {
  const timeCount = 5;
  const [timer, setTimer] = React.useState(timeCount);

  const [laundryData, setLaundryData] = React.useState<Record<string, number>>({
    Jeans: 0,
    Pants: 0,
    Pyjama: 2,
    Shorts: 0,
    Shirts: 1,
    'T-Shirts': 3,
    'Kurta/Salwar': 4,
    Skirt: 4,
    Dupatta: 1,
    'Bed Sheet': 1,
    'Pillow Cover': 2,
    'Towel/H-Towel': 0,
    Turban: 0,
    'Upper Hood': 0,
  });


  const handleSkip = (): void => {
    setPageState(2);
  };

  React.useEffect(() => {
    // eslint-disable-next-line no-undef -- setInterval is a NodeJS API
    let countdownInterval: NodeJS.Timeout;

    if (timer > 0) {
      countdownInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      setPageState(2);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [timer, setPageState]);

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

        <Box mt={2.5}>
          <Typography variant="h5" px={1} fontWeight={600}>
            Laundry Details
          </Typography>
          <Typography variant="body1" px={2} color="var(--mui-palette-primary-main)">
            {data?.LaundryId}
          </Typography>
          <Stack mt={2} px={1.5}>
            <Grid container spacing={1}>
              {Object.keys(laundryData).map((item) => {
                if (laundryData[item] === 0) return null;
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
                        
                        <Typography variant="body1" mr={1} sx={{ justifySelf: 'flex-end' }}>
                          {laundryData[item]}
                        </Typography>
                        
                      </Stack>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            <Divider />
            <Stack mt={2} mb={4} alignItems="center">

              <Stack mt={3} direction="row" alignItems="center" justifyContent="center">
                <Typography variant="body1" color="var(--mui-palette-texxt-primary)" px={1} fontWeight={600}>
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
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ color: 'var(--mui-palette-texxt-primary)', fontWeight: 600 }}
                      >
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
          </Stack>
        </Box>
    </Stack>
  );
}
