'use client';

import * as React from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';

import { logger } from '@/lib/default-logger';
import { useCreateCleaningRequest } from '@/hooks/mutation/use-cleaning';
import { useSlots } from '@/hooks/query/use-cleaning';

interface SelectedSlot {
  id: number;
  time: string;
  date: string;
}

export default function LowerRightCont(): React.JSX.Element {
  const [selectedSlots, setSelectedSlots] = React.useState<SelectedSlot[]>([
    { id: 0, time: '', date: '' },
    { id: 0, time: '', date: '' },
    { id: 0, time: '', date: '' },
  ]);

  const queryClient = useQueryClient();

  const { mutate: createCleaningRequest, isPending } = useCreateCleaningRequest({});
  const { data } = useSlots();
  const slotData = data!;

  const slots = slotData?.data ?? [];
  logger.debug('Slot Data:', slots);

  const now = new Date();
  const currentTime = format(now, 'HH:mm:ss');
  const today = format(now, 'yyyy-MM-dd');
  const nextDay = format(new Date(now.setDate(now.getDate() + 1)), 'yyyy-MM-dd');

  const filteredSlots = slots
    .filter((slot) => {
      const slotTime = slot.start;
      const isToday = format(now, 'yyyy-MM-dd') === today;

      if (isToday && slotTime <= currentTime) return false;

      return slot.is_enabled;
    })
    .sort((a, b) => {
      const dateA = a.start > currentTime ? today : nextDay;
      const dateB = b.start > currentTime ? today : nextDay;

      return dateA === dateB ? a.start.localeCompare(b.start) : dateA.localeCompare(dateB);
    });

  const handleSlotChange = (index: number) => (event: SelectChangeEvent) => {
    const selectedSlot = slots.find((slot) => slot.start === event.target.value);
    if (selectedSlot) {
      const isNextDaySlot = selectedSlot.start <= currentTime;
      const newSelectedSlots = [...selectedSlots];
      newSelectedSlots[index] = {
        id: selectedSlot.id,
        time: selectedSlot.start,
        date: isNextDaySlot ? nextDay : today,
      };
      setSelectedSlots(newSelectedSlots);
    }
  };

  const onHandleConfirmSlots = async (): Promise<void> => {
    const selectedSlotIds = selectedSlots.map((slot) => slot.id);
    const selectedDates = selectedSlots.map((slot) => slot.date);

    const createCleaningRequestData = {
      preferred_slots: selectedSlotIds,
      preferred_dates: selectedDates,
    };
    logger.debug('Cleaning Request Data:', createCleaningRequestData);
    createCleaningRequest(createCleaningRequestData);
    await queryClient.invalidateQueries({ queryKey: ['getCleaningRequests'] });
  };

  const isSlotDisabled = (slot: string): boolean => selectedSlots.some((selectedSlot) => selectedSlot.time === slot);

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Select Room cleaning slots</Typography>
      <Typography variant="caption" gutterBottom>
        Choose your 3 preferred slots for today or the next day
      </Typography>

      <Grid container spacing={2} mt={3}>
        {selectedSlots.map((selectedSlot, index) => (
          <Grid item xs={4} key={`slot-${String(index)}-${selectedSlot.time}`}>
            <FormControl fullWidth>
              <InputLabel id={`slot-label-${String(index)}`}>Slot {index + 1}</InputLabel>
              <Select
                labelId={`slot-label-${String(index)}`}
                value={selectedSlot.time}
                label={`Slot ${String(index + 1)}`}
                onChange={handleSlotChange(index)}
              >
                {filteredSlots.map((slot) => (
                  <MenuItem
                    key={`slot-item-${String(slot.id)}`}
                    value={slot.start}
                    disabled={isSlotDisabled(slot.start) && selectedSlot.time !== slot.start}
                  >
                    {slot.start} - {slot.end} ({slot.start > currentTime ? 'Today' : 'Next Day'})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" spacing={2} mt={3}>
        <LoadingButton loading={isPending} variant="contained" color="primary" onClick={onHandleConfirmSlots}>
          Confirm Slots
        </LoadingButton>
        <Button disabled variant="outlined" color="primary">
          Emergency
        </Button>
      </Stack>
    </Paper>
  );
}
