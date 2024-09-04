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

  const submit = '4567';
  const get = ['2123', '8971', '8789'];


  const [toggle, setToggle] = React.useState(true);
  const [toggleForm, setToggleForm] = React.useState(false);

  const isSubmitted = false;
  const isCollectEmpty = get.length === 0;


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
          <QRCode style={{ aspectRatio: '1/1', width: '70%' }} value={submit} />
        </Box>
      </Box>


      <LaundryForm toggleForm={toggleForm} setToggleForm={setToggleForm} />
    </Paper>
  );
}
