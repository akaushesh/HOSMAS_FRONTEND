'use client';

import * as React from 'react';
import {Box, Button, ButtonGroup, Paper, Typography} from '@mui/material';
import QRCode from 'react-qr-code';



export default function LowerRightCont(): React.JSX.Element {
  
  const [qrVal,setQrVal]=React.useState("Sir lundry!");
  const [toggle,setToggle]=React.useState(false);


  return (
    <Paper elevation={10} sx={{ width: 1, p: 3,display:"flex",alignItems:"stretch",justifyContent:"center",gap:0 }}>
      
      <Box width={0.5} sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",gap:4,mt:5 }}>
        <Typography variant="h4" fontWeight={600} width="100%" textAlign="left">QR Code</Typography>

        <Box width={1}>
          <ButtonGroup sx={{display:"block",width:"100%"}}>
            <Button variant={toggle?'outlined':'contained'} onClick={()=>{setToggle(false)}} sx={{width:"43%"}} >Submit</Button>
            <Button variant={!toggle?'outlined':'contained'}  onClick={()=>{setToggle(true)}} sx={{width:"43%"}} >Get</Button>
          </ButtonGroup>
          <Typography textAlign="center" variant="caption">Use this QR to submit Laundry</Typography>

        </Box>

      </Box>

      <Box width={0.45} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <QRCode  
          style={{ aspectRatio:"1/1", width: "70%" }}
          value={qrVal}
        />
      </Box>
    </Paper>
  );
}
