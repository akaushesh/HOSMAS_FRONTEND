'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Stack, Typography } from '@mui/material';
import QrScanner from 'qr-scanner';

import DottedLoader from '../core/dotted-loader';
import { type QRDataProps } from './Laundry';
import {type AxiosError, type AxiosResponse } from 'axios';
import {type LaundrySlipResponse } from '@/services/laundry';
import { logger } from '@/lib/default-logger';
import {type ErrorResponse } from '@/services/auth';
import { useVerifySlip } from '@/hooks/mutation/use-laundry';
import dayjs from 'dayjs';

interface CheckoutProps {
  setQRData: (val: QRDataProps) => void;
  setPageState: (val: number) => void;
  mode: string;
}

export default function Scanner({ setPageState, setQRData, mode }: CheckoutProps): React.JSX.Element {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [camError, setCamError] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);


  const onSuccess = async (res: AxiosResponse<LaundrySlipResponse>): Promise<void> => {
    logger.debug(res.data);
    if(mode!=='drop' && dayjs(res.data.dropoff_time).format('DD MMM YYYY') === dayjs().format('DD MMM YYYY')){
      setError('Cannot deliver the laundry <br/> on the same day');
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    const { LaundrySlipID: _LaundrySlipID, id: _id, ...rest } = res.data.items;
    const items: Record<string, number> = rest;
    setQRData({
      details:items,
      LaundryId:String(res.data.user_id),
      transactionId:res.data.transaction_id
    })
    setError(null); 
    setPageState(mode === 'drop' ? 3 : 4);
  };


  const onError = (err: AxiosError<ErrorResponse>): void => {
    logger.error(err);
    let nl="";
    if(err.status===412||err.status===410){
      nl="Invalid QR Code"
    }
    else if(err.status===409){
      nl="Show Submit QR code"
    }
    else{
      nl="Server Error"
    }
    setError(`${err.response?.data?.details || " "}<br/>${nl}`);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };  

  const {mutate:verifySlip,isPending}=useVerifySlip({onSuccess,onError});



  const fetchData = (data: string): void => {

    verifySlip({
      transaction_id: data,
      action: mode
    })

  };

  // const verifyInitials = (
  //   data: string
  // ): boolean => {
  //   // return data.startsWith('hosmas-laundry-');
  //   return true;
  // }

  React.useEffect(() => {
    let qrScanner: QrScanner | null = null;

    if (videoRef.current) {
      qrScanner = new QrScanner(
        videoRef.current,
        async (result:{data:string}) => {
          
          // if (!verifyInitials(result.data)){

          //   setError('Invalid QR code');
          //   setTimeout(() => {
          //     setError(null);
          //   }, 3000);

          // }
          // else{
            fetchData(result.data);
            setCamError(null);
          // }
        },
        {
          preferredCamera: 'environment',
          highlightCodeOutline: false,
          highlightScanRegion: false,
          returnDetailedScanResult: true,
        }
      );

      qrScanner.start().catch(() => {
        setCamError('Unable to access camera');
      });
    }

    return () => {
      if (qrScanner) {
        qrScanner.stop();
        qrScanner.destroy();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- limited deps
  }, [setQRData, mode]);

  return (
    <Stack alignItems="center">
      <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 1, alignSelf: 'flex-start' }}
        onClick={() => {
          setPageState(0);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          back to main page
        </Typography>
      </Button>

      <Typography variant="h5" textAlign="center" mt={4} mx={6} color="var(--mui-palette-text-primary)">
        Scan the QR-Code
      </Typography>
      <Typography variant="h6" textAlign="center" mt={1} mx={6} color="var(--mui-palette-text-secondaryChannel)">
        {mode === 'drop' ? 'Drop' : 'Collect'} QR scanner
      </Typography>

      <Stack alignItems="center" mt={8} sx={{ position: 'relative', width: 1 }}>
        {isPending ? (
          <Box sx={{ position: 'absolute', top: '55%', left: '50%', zIndex: 20 }}>
            <DottedLoader />
          </Box>
        ) : null}

        <Stack alignItems="center" sx={{ width: { xs: 0.7, sm: 0.6, md: 0.4, lg: 0.3 }, opacity: isPending ? 0.4 : 1 }}>
          {camError ? (
            <Typography color="error" variant="h5" textAlign="center" mt={8}>
              {camError}
            </Typography>
          ) : (
            <Box sx={{ position: 'relative', display: 'inline-block', width: 1, mt: 4 }}>
              <Stack alignItems="center" sx={{ borderRadius: '40px' }}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    p: 3.5,
                  }}
                >
                  {
                    // eslint-disable-next-line jsx-a11y/media-has-caption -- Video element is used for camera feed
                    <video
                      ref={videoRef}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '14px',
                        objectFit: 'cover',
                      }}
                    />
                  }
                </Box>
              </Stack>

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 0.25,
                  height: 0.25,
                  borderTopLeftRadius: '40px',
                  borderLeft: '10px solid var(--mui-palette-secondary-dark )',
                  borderTop: '10px solid var(--mui-palette-secondary-dark  )',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0.25,
                  height: 0.25,
                  borderTopRightRadius: '40px',
                  borderRight: '10px solid var(--mui-palette-secondary-dark  )',
                  borderTop: '10px solid var(--mui-palette-secondary-dark  )',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0.25,
                  height: 0.25,
                  borderBottomLeftRadius: '40px',
                  borderLeft: '10px solid var(--mui-palette-secondary-dark )',
                  borderBottom: '10px solid var(--mui-palette-secondary-dark )',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 0.25,
                  height: 0.25,
                  borderBottomRightRadius: '40px',
                  borderRight: '10px solid var(--mui-palette-secondary-dark  )',
                  borderBottom: '10px solid var(--mui-palette-secondary-dark )',
                }}
              />
            </Box>
          )}
        </Stack>
      </Stack>
      {error ? (
        <Typography color="error" variant="h6" textAlign="center" mt={5} dangerouslySetInnerHTML={{ __html: error.replace(/<br\s*\/?>/g, '<br />') }} />
      ) : null}
    </Stack>
  );
} 
