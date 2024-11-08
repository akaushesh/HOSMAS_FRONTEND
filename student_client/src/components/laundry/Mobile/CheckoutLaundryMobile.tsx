'use client';

import * as React from 'react';
import { type LaundrySlipResponse } from '@/services/laundry';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Carousel from 'react-material-ui-carousel';
import QRCode from 'react-qr-code';

import LaundryForm from '../LaundryForm';

interface CheckoutProps {
  setPageState: (val: number) => void;
  submitQr: LaundrySlipResponse | null;
  collectQrs: LaundrySlipResponse[] | null;
  isAllowedSubmit: boolean | null;
}

interface QRDataProps {
  details: Record<string, number> | null;
  transactionId: string;
}

export default function CheckoutLaundryMobile({
  isAllowedSubmit,
  submitQr,
  collectQrs,
  setPageState,
}: CheckoutProps): React.JSX.Element {
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History
  const [QRData, setQRData] = React.useState<QRDataProps | null>(null);

  React.useEffect(() => {
    if (submitQr?.items) {
      setQRData({
        details: (({ LaundrySlipID: _LaundrySlipID, id: _id, ...rest }) => rest)(submitQr.items),
        transactionId: submitQr.transaction_id,
      });
    }
  }, [submitQr]);

  const [toggle, setToggle] = React.useState(true);
  const [toggleLFrom, setToggleLForm] = React.useState(false);

  return (
    <Stack alignItems="center">
      <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 1, alignSelf: 'flex-start' }}
        onClick={() => {
          setPageState(0);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          back to main page
        </Typography>
      </Button>

      <Paper sx={{ width: '70%', p: 1, mt: 2, bgcolor: '#E7E7E7' }} elevation={10}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, gap: 1 }}>
          <Button
            variant={toggle ? 'contained' : 'text'}
            onClick={() => {
              setToggle(true);
            }}
            sx={{
              width: '50%',
              borderRadius: 0.8,
              fontSize: '15px',
              fontWeight: 600,
              color: toggle ? 'var(--mui-palette-common-white)' : 'var(--mui-palette-text-primary)',
            }}
          >
            Submit
          </Button>
          <Button
            disabled={!collectQrs || collectQrs.length === 0}
            variant={toggle ? 'text' : 'contained'}
            onClick={() => {
              setToggle(false);
            }}
            sx={{
              width: '50%',
              borderRadius: 0.8,
              fontSize: '15px',
              fontWeight: 600,
              color: !toggle ? 'var(--mui-palette-common-white)' : 'var(--mui-palette-text-primary)',
            }}
          >
            Collect
          </Button>
        </Stack>
      </Paper>

      <Typography
        variant="body1"
        fontSize={18}
        textAlign="center"
        mt={4}
        mx={6}
        color="var(--mui-palette-text-primary)"
      >
        {isAllowedSubmit
          ? !QRData && toggle
            ? 'Fill the Laundry Form to Submit the laundry Request'
            : toggle
              ? 'Scan the QR code to Submit Laundry'
              : 'Scan the QR code to Collect Laundry'
          : 'You have already submitted the laundry'}
      </Typography>

      {toggle ? (
        <Stack alignItems="center">
          {QRData ? (
            <>
              <QRCode style={{ aspectRatio: '1/1', width: '70%', marginTop: '-10px' }} value={QRData.transactionId} />
              {/* <Typography
                variant="h5"
                fontWeight={600}
                textAlign="center"
                color="var(--mui-palette-text-secondaryChannel)"
              >
                CODE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{QRData.transactionId}</span>
              </Typography> */}
            </>
          ) : null}

          <Button
            fullWidth
            variant="contained"
            sx={{ py: 2, mt: !QRData ? 9 : 2, mx: 6 }}
            disabled={!isAllowedSubmit}
            onClick={() => {
              setToggleLForm(true);
            }}
          >
            <Typography variant="body1" fontWeight={600}>
              {isAllowedSubmit ? (!QRData ? 'Submit Laundry' : 'Update Laundry') : 'Already Submitted'}
            </Typography>
          </Button>
        </Stack>
      ) : (
        <Stack alignItems="center" sx={{ width: 1, position: 'relative', m: 0 }}>
          <Carousel
            strictIndexing
            autoPlay={false}
            cycleNavigation={false}
            animation="slide"
            navButtonsAlwaysVisible
            interval={5000}
            navButtonsWrapperProps={{ style: { marginTop: '-42px' } }}
            sx={{
              width: 1,
            }}
          >
            {!collectQrs || collectQrs.length === 0
              ? null
              : collectQrs.map((val) => {
                  return (
                    <Stack alignItems="center" key={val.id}>
                      <QRCode style={{ aspectRatio: 1 / 1, width: '45%' }} value={val.transaction_id} />
                      <Typography
                    variant="h5"
                    fontSize={18}
                    fontWeight={600}
                    textAlign="center"
                    mt="-10px"
                    color="var(--mui-palette-text-secondaryChannel)"
                  >
                    DATE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{dayjs(val.dropoff_time).format('D MMMM, dddd')}</span>
                    </Typography>
                      
                    </Stack>
                  );
                })}
          </Carousel>
        </Stack>
      )}

      <LaundryForm QRData={QRData} setQRData={setQRData} toggleForm={toggleLFrom} setToggleForm={setToggleLForm} />
    </Stack>
  );
}
