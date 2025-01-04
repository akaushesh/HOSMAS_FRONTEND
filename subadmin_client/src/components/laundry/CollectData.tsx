'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, CircularProgress, Divider, Grid, Stack, Typography } from '@mui/material';

import { type QRDataProps } from './Laundry';
import { laundryItems, useDeliverLaundry } from '@/hooks/mutation/use-laundry';
import { LoadingButton } from '@mui/lab';
import { type AxiosError, type AxiosResponse } from 'axios';
import { type SubmissionResponse } from '@/services/laundry';
import { type ErrorResponse } from '@/services/auth';
import { logger } from '@/lib/default-logger';

interface LaundryFormProps {
  data: QRDataProps | null;
  setPageState: (val: number) => void;
}

export default function CollectData({ data, setPageState }: LaundryFormProps): React.JSX.Element {
  const timeCount = 5;
  const [timer, setTimer] = React.useState(timeCount);
  const [success, setSuccess] = React.useState(false);


  const laundryData:Record<string, number>= data ? data.details : {
    jeans: 0,
    pants: 0,
    pyjama: 0,
    shorts: 0,
    shirts: 0,
    tshirts: 0,
    kurta_salwar: 0,
    skirts: 0,
    dupatta: 0,
    bedsheet: 0,
    pillow_cover: 0,
    towel_hand_towel: 0,
    turban: 0,
    upper_hood: 0,
  };


  const onSuccess = async (res: AxiosResponse<SubmissionResponse>): Promise<void> => {
    // setLaundryData(res.data);
    logger.debug(res.data);
    setSuccess(true);
    setTimer(timeCount);
  };

  const onError = (error: AxiosError<ErrorResponse>): void => {
    logger.error(error);
  };  

  const {mutate:deliverSlip,isPending}=useDeliverLaundry({onSuccess,onError});

  const handleSubmit = (): void => {
    deliverSlip(data?.transactionId||"");
  };


  const handleSkip = (): void => {
    setPageState(2);
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
      setPageState(2);
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
          Home
        </Typography>
      </Button>


      {success ? (
        <Stack alignItems="center" justifyContent="flex-start" mt={5}>

          <img src="/assets/success2.gif" alt="laundry" style={{marginTop:"0px",width:"80%" }} />

          <Typography variant="h5" fontSize="27px" px={1} mt={2} fontWeight={600}>
            Laundry Delivered
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
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: 'var(--mui-palette-primary-main)', fontWeight: 600 }}
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
      ) : (

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
                          {laundryItems[item]}
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

            <Stack direction="row" justifyContent="center" gap={2} sx={{ mt: 4, mb: 3 }}>
              <Button
                onClick={() => {
                  setPageState(2);
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
              <LoadingButton
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
                loading={isPending}
                sx={{
                  fontWeight: 600,
                  borderRadius: 1,
                  px: 5,
                }}
              >
                Confirm
              </LoadingButton>
            </Stack>
            
          </Stack>
        </Box>
            )}

    </Stack>
  );
}
