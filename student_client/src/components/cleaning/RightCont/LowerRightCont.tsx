'use client';

import * as React from 'react';
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

import { logger } from '@/lib/default-logger';
import { useCreateCleaningRequest } from '@/hooks/mutation/use-cleaning';
import { useSlots } from '@/hooks/query/use-cleaning';

interface SelectedSlot {
  id: number;
  time: string;
}

export default function LowerRightCont(): React.JSX.Element {
  const [selectedSlots, setSelectedSlots] = React.useState<SelectedSlot[]>([
    { id: 0, time: '' },
    { id: 0, time: '' },
    { id: 0, time: '' },
  ]);

  const { mutate: createCleaningRequest } = useCreateCleaningRequest({});
  const { data } = useSlots();
  const slotData = data!;

  const slots = slotData?.data ?? [];
  logger.debug('Slot Data:', slots);

  const handleSlotChange = (index: number) => (event: SelectChangeEvent) => {
    const selectedSlot = slots.find((slot) => slot.start === event.target.value);
    if (selectedSlot) {
      const newSelectedSlots = [...selectedSlots];
      newSelectedSlots[index] = { id: selectedSlot.id, time: selectedSlot.start };
      setSelectedSlots(newSelectedSlots);
    }
  };

  const onHandleConfirmSlots = (): void => {
    const selectedSlotIds = selectedSlots.map((slot) => slot.id);
    createCleaningRequest({
      preferred_slots: selectedSlotIds,
      preferred_dates: ['2024-09-16', '2024-09-16', '2024-09-16'],
    });
  };

  const isSlotDisabled = (slot: string): boolean => selectedSlots.some((selectedSlot) => selectedSlot.time === slot);

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Select Room cleaning slots</Typography>
      <Typography variant="caption" gutterBottom>
        Choose your 3 preferred slots for the next day
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
                {slots.map((slot) => (
                  <MenuItem
                    key={`slot-item-${String(slot.id)}`}
                    value={slot.start}
                    disabled={isSlotDisabled(slot.start) && selectedSlot.time !== slot.start}
                  >
                    {slot.start} - {slot.end}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="contained" color="primary" onClick={onHandleConfirmSlots}>
          Confirm Slots
        </Button>
        <Button disabled variant="outlined" color="primary">
          Emergency
        </Button>
      </Stack>
    </Paper>
  );
}
