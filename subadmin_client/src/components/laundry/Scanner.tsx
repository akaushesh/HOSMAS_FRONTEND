'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Stack, Typography } from '@mui/material';
import { QrReader } from 'react-qr-reader';
import { border } from '@mui/system';

interface CheckoutProps {
  setQRData: (val: string) => void;
  setPageState: (val: number) => void;
  mode: string;
}

export default function Scanner({ setPageState, setQRData, mode }: CheckoutProps): React.JSX.Element {

  const [constraints, setConstraints] = React.useState<MediaTrackConstraints>({
    facingMode: { exact: 'environment' },
  });


  // React.useEffect(() => {
  //     const checkCamera = async () => {
  //       try {
  //         // Try to access the rear camera with 'ideal' to avoid strict errors
  //         const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } } });
  //         if (stream) {
  //           setConstraints({ facingMode: { ideal: 'environment' } });
  //         }
  //       } catch (error) {
  //         // If any error occurs, fallback to front camera
  //         setConstraints({ facingMode: 'user' });
  //       }
  //     };
  
  //     checkCamera();
  //   }, []);

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

      <Typography
        variant="h5"
        textAlign="center"
        mt={4}
        mx={6}
        color="var(--mui-palette-text-primary)"
      >
        Scan the QR-Code
      </Typography>

      <Stack alignItems="center" mt={8} sx={{width:{xs:0.7,sm:0.6,md:0.4,lg:0.3}}}>

          <Box sx={{ position: 'relative', display: 'inline-block',width:1 }}>

            <Stack alignItems='center' sx={{my:1.3}}>
              <QrReader
                onResult={(result) => {
                  if (result) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- safe
                    setQRData(result?.['text']);
                  }
                
                  // if (error) {
                  //   console.log(error);
                  // }
                } }
                videoStyle={{ width: '100%',height:"100%",objectFit:"cover",borderRadius:"10px" }}
                // videoContainerStyle={{ width: '100%',height:"100%",objectFit:"cover",borderRadius:"10px" }}
                containerStyle={{ width: '70%', aspectRation:'1/1',margin:"12%", backgroundColor: 'transparent',border:"1px dashed var(--mui-palette-secondary-main)",borderRadius:"10px" }} 
                constraints={{facingMode:'user'}}        
                />
            </Stack>
              
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0.25,
                height: 0.25,
                borderTopLeftRadius:"40px",
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
                borderTopRightRadius:"40px",
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
                borderBottomLeftRadius:"40px",
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
                borderBottomRightRadius:"40px",
                borderRight: '10px solid var(--mui-palette-secondary-dark  )',
                borderBottom: '10px solid var(--mui-palette-secondary-dark )',
              }}
              />

            
          </Box>
      </Stack>
    </Stack>
  );
}
