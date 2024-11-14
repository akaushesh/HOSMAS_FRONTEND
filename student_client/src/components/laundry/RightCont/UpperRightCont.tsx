'use client';
import { Paper, Typography } from '@mui/material';
import * as React from 'react'

interface UpperRightContProps {
  laundryNumber:string;
}

export default function UpperRightCont({laundryNumber}:UpperRightContProps):React.JSX.Element{
  

  return (
    <Paper elevation={10} sx={{width:1,height:1,p:3}}>
      
      <Typography variant="h5">Unique Laundry Number</Typography>
      
      <Typography variant="h4" my={2} fontWeight={700} display="block">
        {laundryNumber}
      </Typography>
      
      
      
      
      <Typography variant="body2"  sx={{color:"var(--mui-palette-text-secondaryChannel)",fontWeight:"400"}} display="block">
      Please Do not share your Unique 5-Digits Laundry Number with anyone!
      </Typography>

    

     

    </Paper>
  )
}
