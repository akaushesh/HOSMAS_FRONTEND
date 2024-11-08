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
import {type LaundrySlipResponse } from '@/services/laundry';

export interface QRDataProps {
  details: Record<string, number>|null; 
  transactionId: string; 
}

interface LowerRightContProps {
  isAllowedSubmit: boolean|null;
  submitQr: LaundrySlipResponse|null;
  collectQrs: LaundrySlipResponse[]|null;
  isLaundry: boolean;
  nextDate: string;
}



export default function LowerRightCont({isAllowedSubmit,submitQr,collectQrs,isLaundry,nextDate}:LowerRightContProps): React.JSX.Element {

  const [QRData,setQRData] = React.useState<QRDataProps|null>(null);


  React.useEffect(() => {
    if (submitQr?.items){
      setQRData({
        details: (({ LaundrySlipID: _LaundrySlipID, id: _id, ...rest }) => rest)(submitQr.items),
        transactionId: submitQr.transaction_id,
      });
    }
  }, [submitQr]);



  const [active,isActive] = React.useState(true);



  const [toggleForm, setToggleForm] = React.useState(false);


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
      <Typography variant="h5">{isLaundry?"Laundry Checkout":"Upcoming Laundry"}</Typography>
      <Typography
            variant="caption"
          >
            <span>{ isLaundry? dayjs().format('D MMMM, dddd') : dayjs(nextDate).format('D MMMM, dddd')}</span>
          </Typography>

      <Box sx={{ width: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: 0 }}>
        <Stack alignItems="center" width={0.4} gap={2}>
          <Button fullWidth variant={!active?"outlined":"contained"} disabled={!isAllowedSubmit} sx={{ py: 2 }}
            onClick={()=>{fetchSubmit();}} 
          >
            <Typography variant="body1" fontWeight={600}>
              {isAllowedSubmit?
              !QRData?'Submit Laundry': active?`Update Laundry`:`View submit QR`:
              "Already Submitted"
            }
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
            (!QRData)?(
              <Stack sx={{aspectRatio: '1/1', width: 1, p:2}} justifyContent="center"
              alignItems="center">

                <Stack sx={{aspectRatio: '1/1', width: 1,border:"1px dashed var(--mui-palette-secondary-main)", background:"var(--mui-palette-secondary-light)",cursor :"pointer",borderRadius: 2, fontWeight:500, fontSize:"28px"}} justifyContent="center"
                alignItems="center"
                onClick={()=>{if(isAllowedSubmit)setToggleForm(true);}}
                >
                  +
                </Stack>
              </Stack>
            ):(
              <QRCode style={{ aspectRatio: '1/1', width: '70%' }} value={QRData?.transactionId} />
            )
            :
          (
            (!collectQrs||collectQrs?.length===0)?(
              <Stack sx={{aspectRatio: '1/1', width: 1, p:2}} justifyContent="center"
              alignItems="center">

                <Stack sx={{aspectRatio: '1/1', width: 1,border:"1px dashed var(--mui-palette-secondary-main)", background:"var(--mui-palette-secondary-light)",borderRadius: 2, fontWeight:500, fontSize:"19px",textAlign:"center",p:3}} justifyContent="center"
                alignItems="center" 
                >
                  Nothing to Collect
                </Stack>
              </Stack>
            ):(
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
            {collectQrs.map((val) => {
              return (
                <Stack
                  alignItems="center"
                  key={val.transaction_id}
                >
                  <QRCode style={{ aspectRatio: 1 / 1, width: '70%' }} value={val.transaction_id} />
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    textAlign="center"
                    mt="-20px"
                    color="var(--mui-palette-text-secondaryChannel)"
                  >
                    DATE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{dayjs(val.dropoff_time).format('D MMMM, dddd')}</span>
                  </Typography>
                </Stack>
              );
            })}
          </Carousel>
            )
          )
          }
        </Box>
      </Box>


      <LaundryForm QRData={QRData}  setQRData={setQRData} toggleForm={toggleForm} setToggleForm={setToggleForm} />
    </Paper>
  );
}
