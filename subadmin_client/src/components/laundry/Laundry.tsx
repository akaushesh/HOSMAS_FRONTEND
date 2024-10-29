'use client';

import * as React from 'react';
import { Box} from '@mui/material';
import HomeLaundry from './HomeLaundry';
import Scanner from './Scanner';
import LaundryData from './LaundryData';
import CollectData from './CollectData';

export interface QRDataProps {
  details: Record<string, number>; 
  LaundryId: string; 
  transactionId: string; 
}

export default function Laundry(): React.JSX.Element {
  const [pageState, setPageState] = React.useState(0);
  const [QRData, setQRData] = React.useState<QRDataProps|null>(null);

  return (
    <Box>
      {pageState === 0 && <HomeLaundry setPageState={setPageState} />}

      {pageState === 1 && <Scanner setPageState={setPageState} setQRData={setQRData} mode='drop' />}

      {pageState === 2 && <Scanner setPageState={setPageState} setQRData={setQRData} mode='pick' />}

      {pageState === 3 && (<LaundryData data={QRData} setPageState={setPageState} />)}
      
      {pageState === 4 && (<CollectData data={QRData} setPageState={setPageState} />)}
    </Box>
  );
}
