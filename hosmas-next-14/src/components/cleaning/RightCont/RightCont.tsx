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

  const [slots, setSlots] = React.useState<SlotProps[]>([{ from: '2022-04-17T15:30', to: '2022-04-17T15:40' },
    // { from: '2022-04-17T6:30', to: '2022-04-17T15:40' },{ from: '2022-04-17T15:30', to: '2022-04-17T15:40' }
  ]);

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:1, height:1,flexDirection:'column'  }}
      gap="4%"
      width={1}
    >
      <Box sx={{width:1,height:0.34}}>
        <UpperRightCont/>
      </Box>
      <Box sx={{width:1,height:0.65}}>
        <LowerRightCont slots={slots} setSlots={setSlots} />
      </Box>
    </Box>
  );
}
