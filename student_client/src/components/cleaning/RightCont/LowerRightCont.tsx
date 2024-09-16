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

const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 9; hour < 18; hour++) {
    const start = `${hour.toString().padStart(2, '0')}:00`;
    const end = `${(hour + 1).toString().padStart(2, '0')}:00`;
    slots.push(`${start} - ${end}`);
  }
  return slots;
};

export default function LowerRightCont(): React.JSX.Element {
  const slots = generateTimeSlots();
  const [selectedSlots, setSelectedSlots] = React.useState<string[]>(['', '', '']);

  const handleSlotChange = (index: number) => (event: SelectChangeEvent) => {
    const newSelectedSlots = [...selectedSlots];
    newSelectedSlots[index] = event.target.value;
    setSelectedSlots(newSelectedSlots);
  };

  const isSlotDisabled = (slot: string): boolean => selectedSlots.includes(slot);

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Select Room cleaning slots</Typography>
      <Typography variant="caption" gutterBottom>
        Choose your 3 preferred slots for the next day
      </Typography>

      <Grid container spacing={2} mt={3}>
        {selectedSlots.map((selectedSlot, index) => (
          <Grid item xs={4} key={`slot-${String(index)}-${selectedSlot}`}>
            <FormControl fullWidth>
              <InputLabel id={`slot-label-${String(index)}`}>Slot {index + 1}</InputLabel>
              <Select
                labelId={`slot-label-${String(index)}`}
                value={selectedSlot}
                label={`Slot ${String(index + 1)}`}
                onChange={handleSlotChange(index)}
              >
                {slots.map((slot) => (
                  <MenuItem
                    key={`slot-item-${slot}`}
                    value={slot}
                    disabled={isSlotDisabled(slot) && selectedSlot !== slot}
                  >
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="contained" color="primary">
          Confirm Slots
        </Button>
        <Button variant="outlined" color="primary">
          Emergency
        </Button>
      </Stack>
    </Paper>
  );
}
