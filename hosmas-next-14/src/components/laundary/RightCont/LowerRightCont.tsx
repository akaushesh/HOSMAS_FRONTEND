'use client';

import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Box, Fab, IconButton, Paper, Snackbar, Typography } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs, { type Dayjs } from 'dayjs';

import { type SlotProps } from './RightCont';

interface ElementProps {
  slots: SlotProps[];
  setSlots: (val: SlotProps[]) => void;
}

export default function LowerRightCont({ slots, setSlots }: ElementProps): React.JSX.Element {
  const minTime = '2022-04-17T9:00';
  const maxTime = '2022-04-17T17:00';

  const [err, setErr] = React.useState('');
  const [showSlot, setShowSlot] = React.useState(false);
  const [newSlot, setNewSlot] = React.useState<SlotProps>({ from: minTime, to: maxTime });

  const changeSlot = (newValue: Dayjs | null, index: number, key: 'from' | 'to'): void => {
    const updatedSlots = [...slots];
    updatedSlots[index][key] = dayjs(newValue).format('YYYY-MM-DDTHH:mm');
    setSlots(updatedSlots);
  };

  const deleteSlot = (index: number) => (): void => {
    const updatedSlots = [...slots];
    updatedSlots.splice(index, 1);
    setSlots(updatedSlots);
  };

  const storeNewValue = (newValue: Dayjs | null, key: 'from' | 'to'): void => {
    const formattedValue = dayjs(newValue).format('YYYY-MM-DDTHH:mm');
    setNewSlot((prevSlot) => ({
      ...prevSlot,
      [key]: formattedValue,
    }));
  };

  const addSlot = (): void => {
    const updatedSlots = [...slots, { from: newSlot.from, to: newSlot.to }];
    setSlots(updatedSlots);
    setShowSlot(false);
    setNewSlot({ from: minTime, to: maxTime });
  };

  const ResetSnackBar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setErr('');
  };

  const handleErr = (index: number, key: 'from' | 'to'): void => {
    const updatedSlots = [...slots];

    updatedSlots[index][key] =
      updatedSlots[index][key] === (minTime || maxTime)
        ? dayjs('').format('YYYY-MM-DDTHH:mm')
        : dayjs(key === 'from' ? minTime : maxTime).format('YYYY-MM-DDTHH:mm');

    setSlots(updatedSlots);
    setErr('Invalid time slot');
  };

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Select Room cleaning slots</Typography>
      <Typography variant="caption">
        Choose your preferred slots (max 3) for room cleaning service in case you are not available immediately
      </Typography>

      <Box
        mt={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: slots.length === 0 && !showSlot ? '1px dashed var(--mui-palette-secondary-main)' : '',
          bgcolor: slots.length === 0 && !showSlot ? 'var(--mui-palette-secondary-light)' : '',
          borderRadius: slots.length === 0 && !showSlot ? '8px' : '',
          height: slots.length === 0 && !showSlot ? 0.735 : 'auto',
        }}
      >
        <Box mt={1}>
          {slots.map((slot, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 'fit-content' }}
              gap={2}
            >
              <TimePicker
                sx={{ width: '35%' }}
              slotProps={{ textField: { margin:"dense",size: 'small' } }}
                
                label="From"
                closeOnSelect={false}
                minTime={dayjs(minTime)}
                maxTime={dayjs(slot.to)}
                value={dayjs(slot.from === minTime ? minTime : slot.from)}
                onAccept={(newValue) => {
                  changeSlot(newValue, index, 'from');
                }}
                formatDensity="dense"
                onError={() => {
                  handleErr(index, 'from');
                }}
              />

              <TimePicker
                sx={{ width: '35%' }}
              slotProps={{ textField: { margin:"dense",size: 'small' } }}
                
                label="To"
                closeOnSelect={false}
                minTime={dayjs(slot.from)}
                maxTime={dayjs(maxTime)}
                value={dayjs(slot.to === maxTime ? maxTime : slot.to)}
                onAccept={(newValue) => {
                  changeSlot(newValue, index, 'to');
                }}
                onError={() => {
                  handleErr(index, 'to');
                }}
              />
              <Box py={2} px={1}>
                <IconButton size="small" sx={{ height: 1 }} onClick={deleteSlot(index)}>
                  <DeleteIcon fontSize="medium" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>

        {slots.length < 3 && !showSlot && (
          <>
            {slots.length === 0 && (
              <Typography mb={1} variant="h5" color="var(--mui-palette-text-primaryChannel)">
                Add slot
              </Typography>
            )}
            <Fab
              size="small"
              onClick={() => {
                setShowSlot(true);
              }}
            >
              <AddIcon fontSize="small" />
            </Fab>
          </>
        )}

        {showSlot ? (
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 'fit-content' }}
            gap={2}
          >
            <TimePicker
              sx={{ width: '35%' }}
              slotProps={{ textField: { margin:"dense",size: 'small' } }}
              
              label="From"
              closeOnSelect={false}
              minTime={dayjs(minTime)}
              maxTime={dayjs(newSlot.to)}
              value={dayjs(newSlot.from)}
              onAccept={(newValue) => {
                storeNewValue(newValue, 'from');
              }}
            />
            <TimePicker
              sx={{ width: '35%' }}
              slotProps={{ textField: { margin:"dense",size: 'small' } }}
              
              label="To"
              closeOnSelect={false}
              minTime={dayjs(newSlot.from)}
              maxTime={dayjs(maxTime)}
              value={dayjs(newSlot.to)}
              onAccept={(newValue) => {
                storeNewValue(newValue, 'to');
              }}
            />

            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Box py={2} px={1}>
                <IconButton size="small" color="primary" sx={{ height: 1}} onClick={addSlot}>
                  <CheckIcon fontSize="medium" />
                </IconButton>
              </Box>

              <Box py={2} px={1}>
                <IconButton
                  size="small"
                  sx={{ height: 1}}
                  onClick={() => {
                    setShowSlot(false);
                    setNewSlot({ from: minTime, to: maxTime });
                  }}
                >
                  <DeleteIcon fontSize="medium" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>

      <Snackbar
        sx={{ zIndex: '10000' }}
        open={err !== ''}
        autoHideDuration={2500}
        onClose={ResetSnackBar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={ResetSnackBar} variant="filled" severity="error" sx={{ width: '100%' }}>
          {err}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
