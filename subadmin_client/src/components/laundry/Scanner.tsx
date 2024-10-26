'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Stack, Typography } from '@mui/material';
import QrScanner from 'qr-scanner';

import DottedLoader from '../core/dotted-loader';
import { type QRDataProps } from './Laundry';

interface CheckoutProps {
  setQRData: (val: QRDataProps) => void;
  setPageState: (val: number) => void;
  mode: string;
}

export default function Scanner({ setPageState, setQRData, mode }: CheckoutProps): React.JSX.Element {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [camError, setCamError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async (data: string): Promise<void> => {
    setLoading(true);

    let res = {};

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (res?.data?.isValidId) {
      if (mode === res?.data?.mode) {
        // setQRData(data);
        setError(null); 
        setPageState(mode === 'drop' ? 3 : 4);
      } else {
        const action = mode === 'drop' ? 'Submit' : 'Collect';
        setError(`Please show the ${action} QR code.`);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } else {
      setError('Invalid QR code');
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const verifyInitials = (
    // data: string
  ): boolean => {
    // return data.startsWith('hosmas-laundry-');
    return true;
  }

  React.useEffect(() => {
    let qrScanner: QrScanner | null = null;

    if (videoRef.current) {
      qrScanner = new QrScanner(
        videoRef.current,
        async (result) => {
          console.log('Decoded QR code:', result.data);
          if (!verifyInitials(result.data)) {
            setError('Invalid QR code');
            setTimeout(() => {
              setError(null);
            }, 3000);
          }
          else{
            await fetchData(result.data);
            setQRData(result.data);
            setCamError(null);
          }
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
        {loading ? (
          <Box sx={{ position: 'absolute', top: '55%', left: '50%', zIndex: 20 }}>
            <DottedLoader />
          </Box>
        ) : null}

        <Stack alignItems="center" sx={{ width: { xs: 0.7, sm: 0.6, md: 0.4, lg: 0.3 }, opacity: loading ? 0.4 : 1 }}>
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
        <Typography color="error" variant="h5" textAlign="center" mt={5}>
          {error}
        </Typography>
      ) : null}
    </Stack>
  );
}
