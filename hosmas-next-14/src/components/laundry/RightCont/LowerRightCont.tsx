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

export default function LowerRightCont(): React.JSX.Element {
  const [qrVal, setQrVal] = React.useState('Sir lundry!');

  const submit = '4567';
  const get = ['2123', '8971', '8789'];

  const [laundryData, setLaundryData] = React.useState<Record<string, number>>({
    Jeans: 0,
    Pants: 0,
    Pyjama: 0,
    Shorts: 0,
    Shirts: 0,
    'T-Shirts': 0,
    'Kurta/Salwar': 0,
    Skirt: 0,
    Dupatta: 0,
    'Bed Sheet': 0,
    'Pillow Cover': 0,
    'Towel/H-Towel': 0,
    Turban: 0,
    'Upper Hood': 0,
  });

  const isSubmitted = false;
  const isCollectEmpty = get.length === 0;

  const [toggleForm, setToggleForm] = React.useState(false);

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
          <Button fullWidth onClick={()=>{setToggleForm(true)}} variant="contained" sx={{ py: 2 }}>
            <Typography variant="body1" fontWeight={600}>Submit Laundry</Typography>
          </Button>

          <Button fullWidth variant="contained" disabled sx={{ py: 2 }}>
            <Typography variant="body1" fontWeight={600}>Collect Laundry</Typography>
          </Button>
        </Stack>

        <Box width={0.45} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <QRCode style={{ aspectRatio: '1/1', width: '70%' }} value={qrVal} />
        </Box>
      </Box>


      <LaundryForm laundryData={laundryData} setLaundryData={setLaundryData} toggleForm={toggleForm} setToggleForm={setToggleForm} />
    </Paper>
  );
}
