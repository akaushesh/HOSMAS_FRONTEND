'use client';

import * as React from 'react';
import { Box} from '@mui/material';
import HomeLaundry from './HomeLaundry';
import Scanner from './Scanner';
import LaundryData from './LaundryData';
import CollectData from './CollectData';
import History from './History';
import ChooseHostels from './ChooseHostels';
import SelectPage from './Select';

export interface QRDataProps {
  details: Record<string, number>; 
  LaundryId: string; 
  transactionId: string; 
}

export interface HostelProps {
  hostelId: number;
  hostelName: string;
  hostelImg: string;
  hostelOtherName: string;
}

export default function Laundry(): React.JSX.Element {
  const [hostel, setHostel] = React.useState<HostelProps>({
    hostelId: -2,
    hostelName: '',
    hostelImg: '',
    hostelOtherName: '',
  });
  const [pageState, setPageState] = React.useState(-2);
  const [QRData, setQRData] = React.useState<QRDataProps|null>(null);

  return (
    <Box>
      {pageState === -2 && <SelectPage setPageState={setPageState} />}
      {pageState === -1 && <ChooseHostels setHostel={setHostel} setPageState={setPageState} />}
      {pageState === 0 && <HomeLaundry hostelId={hostel.hostelId} setPageState={setPageState} />}

      {(pageState === 1||pageState === 2) && <Scanner setPageState={setPageState} setQRData={setQRData} mode={pageState===1?'drop':'pick'} />}

      {pageState === 3 && (<LaundryData data={QRData} setPageState={setPageState} />)}
      
      {pageState === 4 && (<CollectData data={QRData} setPageState={setPageState} />)}
      
      {pageState === 5 && (<History setPageState={setPageState} />)}
    </Box>
  );
}
