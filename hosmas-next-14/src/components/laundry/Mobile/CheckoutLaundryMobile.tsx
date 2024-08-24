'use client';

import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Carousel from 'react-material-ui-carousel';
import QRCode from 'react-qr-code';

import LaundryForm from '../LaundryForm';

interface CheckoutProps {
  setPageState: (val: number) => void;
}

export default function CheckoutLaundryMobile({ setPageState }: CheckoutProps): React.JSX.Element {
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History

  const [toggle, setToggle] = React.useState(true);
  const [toggleLFrom, setToggleLForm] = React.useState(false);

  const isFormFilled = false;
  const submit = '4567';
  const get = [
    { id: '2123', date: '2022-09-17T17:00' },
    { id: '8971', date: '2022-09-19T17:00' },
    { id: '8789', date: '2022-09-21T17:00' },
  ];

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
            disabled={get.length === 0}
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
        {!isFormFilled && toggle
          ? 'Fill the Laundry Form to Submit the laundry Request'
          : toggle
            ? 'Scan the QR code to Submit Laundry'
            : 'Scan the QR code to Collect Laundry'}
      </Typography>

      {toggle ? (
        <Stack alignItems="center">
          {!isFormFilled ? (
            <Button
              fullWidth
              variant="contained"
              sx={{ py: 2, mt: 9,mx:6 }}
              onClick={() => {
                setToggleLForm(true);
              }}
            >
              <Typography variant="body1"  fontWeight={600}>
                Submit Laundry
              </Typography>
            </Button>
          ) : (
            <>
              <QRCode style={{ aspectRatio: '1/1', width: '70%' }} value={submit} />
              <Typography
                variant="h5"
                fontWeight={600}
                textAlign="center"
                mt={0}
                color="var(--mui-palette-text-secondaryChannel)"
              >
                CODE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{submit}</span>
              </Typography>
            </>
          )}
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
              // display:"flex",justifyContent:"center",alignItems:"center",gap:4, flexDirection:"column"
            }}
          >
            {get.map((val) => {
              return (
                <Stack
                  alignItems="center"
                  key={val.id}
                  // sx={{width:"70%",position:"relative"}}
                >
                  <QRCode style={{ aspectRatio: 1 / 1, width: '45%' }} value={val.id} />
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    textAlign="center"
                    mt={0}
                    color="var(--mui-palette-text-secondaryChannel)"
                  >
                    CODE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{val.id}</span>
                  </Typography>
                  <Typography variant="h6" textAlign="center" mt={1} color="var(--mui-palette-text-primary)">
                    {dayjs(val.date).format('D MMMM, dddd')}
                  </Typography>
                </Stack>
              );
            })}
          </Carousel>
        </Stack>
      )}

      <LaundryForm toggleForm={toggleLFrom} setToggleForm={setToggleLForm} />
    </Stack>
  );
}
