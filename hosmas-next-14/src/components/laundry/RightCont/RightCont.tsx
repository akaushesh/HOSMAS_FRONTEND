'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import UpperRightCont from './UpperRightCont';
import LowerRightCont from './LowerRightCont';


export interface SlotProps {
  from: string;
  to: string;
}

export default function RightCont(): React.JSX.Element {


  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:1, height:1,flexDirection:'column'  }}
      gap="4%"
      width={1}
    >
      <Box sx={{width:1,height:"fit-content"}}>
        <UpperRightCont/>
      </Box>
      <Box sx={{width:1,height:0.75}}>
        <LowerRightCont/>
      </Box>
    </Box>
  );
}
