'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import QRCode from 'react-qr-code';
import LaundryForm from '../LaundryForm';
import Carousel from 'react-material-ui-carousel';
import dayjs from 'dayjs';
import { border } from '@mui/system';

export default function LowerRightCont(): React.JSX.Element {

  let submit = "";
  const get = [
    { id: '2123', date: '2022-09-17T17:00' },
    { id: '8971', date: '2022-09-19T17:00' },
    { id: '8789', date: '2022-09-21T17:00' },
  ];
  const [active,isActive] = React.useState(true);

  const [toggle, setToggle] = React.useState(true);
  const [toggleForm, setToggleForm] = React.useState(false);

  const isSubmitted = false;
  const isCollectEmpty = get.length === 0;

  const fetchSubmit=():void=>{
    if(active){
      setToggleForm(true);
    }
    isActive(true);
  }

  const fetchCollect=():void=>{
    isActive(false);
  }

  return (
    <Paper
      elevation={10}
      sx={{
        width: 1,
        p: 3,
      }}
    >
      <Typography variant="h5">Laundry Checkout</Typography>

      <Box sx={{ width: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: 0 }}>
        <Stack alignItems="center" width={0.4} gap={2}>
          <Button fullWidth variant={!active?"outlined":"contained"} sx={{ py: 2 }}
            onClick={()=>{fetchSubmit();}} 
          >
            <Typography variant="body1" fontWeight={600}>
              {submit===""?'Submit Laundry': active?`Update Laundry`:`View submit QR`}
            </Typography>
          </Button>

          <Button fullWidth variant={active?"outlined":"contained"}  sx={{ py: 2 }}
            onClick={()=>{fetchCollect();}} 
          >
            <Typography variant="body1" fontWeight={600}>Collect Laundry</Typography>
          </Button>
        </Stack>
        
        <Box width={0.45} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {active ? 
            (submit==="")?(
              <Stack sx={{aspectRatio: '1/1', width: 1, p:2}} justifyContent="center"
              alignItems="center">

                <Stack sx={{aspectRatio: '1/1', width: 1,border:"1px dashed var(--mui-palette-secondary-main)", background:"var(--mui-palette-secondary-light)",cursor :"pointer",borderRadius: 2, fontWeight:500, fontSize:"28px"}} justifyContent="center"
                alignItems="center"
                onClick={()=>{setToggleForm(true);}}
                >
                  +
                </Stack>
              </Stack>
            ):(
              <QRCode style={{ aspectRatio: '1/1', width: '70%' }} value={submit} />
            )
            :
          (
          <Carousel
            strictIndexing
            autoPlay={false}
            cycleNavigation={false}
            animation="slide"
            navButtonsAlwaysVisible
            interval={5000}
            navButtonsWrapperProps={{ style: { marginTop: '-42px' } }}
            navButtonsProps={{
              style: {
                // backgroundColor: 'transparent',
                borderRadius: '50%', // Keep the button round
                padding: '2px', // Adjust the size by reducing padding
              },
            }}
            sx={{
              width: 1,
            }}
          >
            {get.map((val) => {
              return (
                <Stack
                  alignItems="center"
                  key={val.id}
                >
                  <QRCode style={{ aspectRatio: 1 / 1, width: '55%' }} value={val.id} />
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    textAlign="center"
                    mt="-30px"
                    color="var(--mui-palette-text-secondaryChannel)"
                  >
                    CODE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{val.id}</span>
                  </Typography>
                  <Typography variant="body1" textAlign="center" mt={1} color="var(--mui-palette-text-primary)">
                    {dayjs(val.date).format('D MMMM, dddd')}
                  </Typography>
                </Stack>
              );
            })}
          </Carousel>
          )
          }
        </Box>
      </Box>


      <LaundryForm toggleForm={toggleForm} setToggleForm={setToggleForm} />
    </Paper>
  );
}
