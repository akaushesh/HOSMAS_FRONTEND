'use client';
import { Paper, Typography } from '@mui/material';
import * as React from 'react'

export default function UpperRightCont():React.JSX.Element{
  
  const UniqueNum="ABC-123";

  return (
    <Paper elevation={10} sx={{width:1,height:1,p:3}}>
      
      <Typography variant="h5">Unique Laundary Number</Typography>
      
      <Typography variant="h3" my={2} fontWeight={700} display="block">
        {UniqueNum}
      </Typography>
      
      
      
      
      <Typography variant="body2"  sx={{color:"var(--mui-palette-text-secondaryChannel)",fontWeight:"700"}} display="block">
      Please Do not share your Unique 5-Digits Laundry Number with anyone!
      </Typography>

    

     

    </Paper>
  )
}
