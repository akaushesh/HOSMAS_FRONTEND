'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Button, Paper, Stack, Typography } from '@mui/material';
import QRCode from 'react-qr-code';
import Carousel from 'react-material-ui-carousel';

interface CheckoutProps {
  setPageState: (val: number) => void;
}

export default function CheckoutLaundryMobile({ setPageState }: CheckoutProps): React.JSX.Element {
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History

  const [toggle, setToggle] = React.useState(true);

  const isFormFilled = false;
  const submit = '4567';
  const get = ['2123', '8971', '8789'];

  return (
    <Stack alignItems="center">
      <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 1,alignSelf:"flex-start" }}
        
        onClick={() => {
          setPageState(0);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          back to main page
        </Typography>
      </Button>


      <Paper sx={{ width:"70%", p: 1, mt: 2, bgcolor: '#E7E7E7' }} elevation={10}>
        <Stack direction='row' alignItems='center' justifyContent='center' sx={{ width:1, gap:1 }}>
          <Button
            variant={toggle ? 'contained' : 'text'}
            onClick={() => {
              setToggle(true);
            }}
            sx={{ width: '50%',borderRadius:0.8,fontSize:"15px",fontWeight:600,color:toggle?"var(--mui-palette-common-white)":"var(--mui-palette-text-primary)" }}
          >
            Submit
          </Button>
          <Button
            variant={toggle ? 'text' : 'contained'}
            onClick={() => {
              setToggle(false);
            }}
            sx={{ width: '50%',borderRadius:0.8,fontSize:"15px",fontWeight:600,color:!toggle?"var(--mui-palette-common-white)":"var(--mui-palette-text-primary)" }}
          >
            Collect
          </Button>
        </Stack >
      </Paper>
        
       <Typography variant="body1" fontSize={18} textAlign="center" mt={4} mx={6} color="var(--mui-palette-text-primary)">
          {(!isFormFilled && toggle) ? 'Fill the Laundry Form to Submit the laundry Request' : toggle?'Scan the QR code to Submit Laundry':'Scan the QR code to Collect Laundry'}
        
        </Typography>

            
            {toggle?(
                <Stack alignItems="center">

                    <QRCode  
                        style={{ aspectRatio:"1/1", width: "70%" }}
                        value={submit}
                    />
                    <Typography variant="h5" fontWeight={600} textAlign="center" mt={0} color="var(--mui-palette-text-secondaryChannel)">
                        CODE: <span style={{color:"var(--mui-palette-text-primary)"}}>{submit}</span> 
                    </Typography>
                </Stack >

            ):
            (
              <Stack alignItems='center' >

                <Carousel  
                    strictIndexing 
                    autoPlay={false}
                    cycleNavigation	={false}
                    animation='slide'
                    navButtonsAlwaysVisible
                >
                  {get.map((val) => {
                    return (
                      <Stack
                        alignItems='center'
                        key={val}
                        sx={{width:"70%",position:"relative"}}
                      >
                          <QRCode  
                              style={{ aspectRatio:1/1,width: "70%" }}
                              value={val}
                          />
                          <Typography variant="h5" fontWeight={600} textAlign="center" mt={0} color="var(--mui-palette-text-secondaryChannel)">
                              CODE: <span style={{color:"var(--mui-palette-text-primary)"}}>{val}</span> 
                          </Typography>
                      </Stack>
                    );
                  })}
                </Carousel>
              </Stack>

            )}



    </Stack>
  );
}
