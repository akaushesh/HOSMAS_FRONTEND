'use client';

import * as React from 'react';
import { Box, Button, Divider, Paper, Stack, Typography, Skeleton } from '@mui/material';


import { type CleanerProps, type RequestProps } from './Assignment';

interface RequestsProps {
  handleAssignCleaner: (assignedSlot: { from: string; to: string }, assign: boolean, roomName: string, requestId: string) => void;
  selectedCleaner: CleanerProps;
}

export function Requests({ handleAssignCleaner, selectedCleaner }: RequestsProps): React.JSX.Element {
  const [cleaningRequests, setCleaningRequests] = React.useState<RequestProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { getCleaningRequests, getSlots } = await import('@/services/cleaning');

        // Fetch both slots and requests in parallel
        const [res, slotsRes] = await Promise.all([getCleaningRequests(), getSlots()]);
        console.debug('[Requests] raw API response:', res.data);
        console.debug('[Requests] slots:', slotsRes.data);

        // Build a slot ID → {start, end} lookup map
        const slotMap: Record<number, { start: string; end: string }> = {};
        if (Array.isArray(slotsRes.data)) {
          slotsRes.data.forEach((s: any) => {
            slotMap[s.id] = { start: s.start, end: s.end };
          });
        }

        const mappedRequests = res.data.results.map((req: any) => {
          console.debug('[Requests] mapping req:', req);
          // Go serializes struct fields as PascalCase (no json tags on the model)
          const id = req.ID ?? req.id;
          const roomName = req.RoomNumber || req.room_number || `Room ${req.RoomID ?? req.room_id}`;
          const workerId = req.WorkerID ?? req.worker_id;
          const workerName = req.Worker?.name ?? req.worker?.name ?? '';

          const preferredSlotIds: number[] = req.PreferredSlots ?? req.preferred_slots ?? [];
          const preferredDates: string[] = req.PreferredDates ?? req.preferred_dates ?? [];

          // Map each slot ID to its actual time window using the slot lookup map
          // Use local time format (no Z) so getHours() returns the correct local hour
          // Fallback: derive time from slot index (slot 1=9AM, 2=10AM, etc.)
          const slots = preferredSlotIds
            .filter((slotId: number) => slotId > 0)
            .map((slotId: number, i: number) => {
              const date = preferredDates[i] ? preferredDates[i].split('T')[0] : new Date().toISOString().split('T')[0];
              if (slotMap[slotId]) {
                const { start, end } = slotMap[slotId];
                return { id: slotId, from: `${date}T${start}`, to: `${date}T${end}` };
              }
              // Fallback: treat slot ID as sequential starting from 9AM
              const startHour = (8 + slotId).toString().padStart(2, '0');
              const endHour = (9 + slotId).toString().padStart(2, '0');
              return { id: slotId, from: `${date}T${startHour}:00:00`, to: `${date}T${endHour}:00:00` };
            });

          const assignedSlotId = req.SlotID ?? req.slot_id ?? null;

          return {
            id: id?.toString() ?? '',
            roomName,
            slots,
            assignedId: workerId ? workerId.toString() : '',
            assignedName: workerName,
            assignedSlotId,
          };
        });

        console.debug('[Requests] mappedRequests:', mappedRequests);

        if (mappedRequests.length > 0) {
          setCleaningRequests(mappedRequests);
        } else {
          setCleaningRequests([]);
        }
      } catch (error) {
        console.error('Failed to fetch requests:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const isDisabled = selectedCleaner.id === '';

  const handleAssign = (slot: number, assign: boolean, id: string): void => {
    if (assign) {
      // Setting Requests
      setCleaningRequests([...cleaningRequests.map((req) => {
        if (req.id === id) {
          req.assignedId = selectedCleaner.id;
          req.assignedName = selectedCleaner.name;
          req.selectedSlot = req.slots[slot];
        }
        return req;
      })]);

      const req = cleaningRequests.find((req) => req.id === id);
      if (req) {
        handleAssignCleaner(req.selectedSlot as { from: string; to: string }, true, req.roomName, req.id);
      }

    }
    else {
      // Setting Cleaners
      setCleaningRequests([...cleaningRequests.map((req) => {
        if (req.id === id) {
          req.assignedId = '';
          req.assignedName = '';
          req.selectedSlot = undefined;
        }
        return req;
      })]);

      const req = cleaningRequests.find((req) => req.id === id);
      if (req) {
        handleAssignCleaner(req.selectedSlot as { from: string; to: string }, false, req.roomName, req.id);
      }

    }
  }

  const [isSaving, setIsSaving] = React.useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const { assignSingleRequest } = await import('@/services/cleaning');
      const assignments = cleaningRequests.filter(req => req.assignedId);
      for (const req of assignments) {
        await assignSingleRequest(req.id, req.assignedId!, req.selectedSlot?.id ?? req.assignedSlotId);
      }
      alert('Manual assignments successfully saved to backend!');
    } catch (err) {
      console.error(err);
      alert('Failed to save assignments');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Paper elevation={10} sx={{ p: 3, width: 0.65 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Cleaning Requests</Typography>
        <Box>Filters</Box>
      </Stack>
      <Box mt={3} sx={{
        overflowY: 'auto', height: '47vh', width: 1,
        opacity: isDisabled && !isLoading ? 0.5 : 1,
      }}>
        {isLoading ? (
          Array.from(new Array(4)).map((_, index) => (
            <Box key={index}>
              <Stack direction="row" py={1} justifyContent="flex-start" gap={9} alignItems="center">
                <Skeleton variant="text" width={80} height={40} />
                <Skeleton variant="rounded" width="100%" height={60} />
              </Stack>
              {3 !== index && <Divider sx={{ my: 0.4 }} />}
            </Box>
          ))
        ) : (
          cleaningRequests.map((request, index) => {
            return (
              <Box key={request.id}>
                <Stack direction="row" py={1} justifyContent="flex-start" gap={9} alignItems="center">
                  <Typography variant="h6" fontSize="20px" fontWeight={500}>
                    {request.roomName}
                  </Typography>
                  <Box zIndex={1}>
                    <SpecialButton handleAssign={handleAssign} isDisabled={isDisabled} id={request.id} slots={request.slots}
                      assigned={request.assignedName}
                      assignedSlotId={request.assignedSlotId}
                    />
                  </Box>
                </Stack>
                {cleaningRequests.length - 1 !== index && <Divider sx={{ my: 0.4 }} />}
              </Box>
            );
          })
        )}
      </Box>

      <Stack direction="row" justifyContent="space-between" mt={4} width={1}>
        <Typography variant="h6">* Select a worker to assign cleaning</Typography>
        <Button variant="contained" sx={{ px: 6 }} color="primary" onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </Stack>
    </Paper>
  );
}





function SpecialButton({ slots, isDisabled, handleAssign, id, assigned, assignedSlotId }: { slots: { id?: number; from: string; to: string }[]; isDisabled: boolean; handleAssign: (slot: number, assign: boolean, id: string) => void; id: string; assigned: string; assignedSlotId?: number | null; }): React.JSX.Element {
  const timings = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  const timingsPrint = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  const activeSlots = slots.map((slot) => {
    const from = new Date(slot.from).getHours();
    const to = new Date(slot.to).getHours();
    return timings.slice(from - 9, to - 9);
  });

  const [selectedTime, setSelectedTime] = React.useState<number | null>(null);

  return (
    <Box>
      <Stack direction="row" justifyContent="center" width={1}>

        {timings.map((time, index) => {
          const slotIndex = activeSlots.findIndex((slot) => slot.includes(time));
          const isPreviouslyAssigned = assignedSlotId != null && slotIndex >= 0 && slots[slotIndex]?.id === assignedSlotId;
          const [selectSlot, setSelectSlot] = React.useState(isPreviouslyAssigned);
          const dividerColorCondition = activeSlots.flat().includes(time) || (
            activeSlots.flat().includes(time - 1) && time !== 5) || (time === 1 && activeSlots.flat().includes(12));


          const restDisableCondition = selectedTime === null ? true : selectedTime === time;

          return (
            <Stack key={time} direction="row" alignItems="end" justifyContent="center">

              <Stack direction="column" alignItems="center" width="14px">
                <Typography variant="caption" sx={{ p: 0, color: 'var(--TextMain-Color)' }}>
                  {timingsPrint[index]}
                </Typography>

                <Divider
                  sx={{
                    backgroundColor: index === 0 ? 'transparent' : 'var(--mui-palette-secondary-main)',
                    borderWidth: index === 0 ? 0 : '1px',
                    borderStyle: 'solid',
                    borderColor: (dividerColorCondition && restDisableCondition) ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-secondary-main)',
                    m: 0,
                    mt: 1,
                    py: 2,
                  }}
                  variant="middle"
                  orientation="vertical"
                />
              </Stack>

              <Button
                variant="text"
                sx={{
                  m: 0,
                  py: 2,
                  height: 0.3,
                  borderRadius: 0,
                  fontWeight: 800,
                  backgroundColor: (activeSlots.flat().includes(time) && restDisableCondition) ? '#F4C9C9' : 'transparent',
                  pointerEvents: (activeSlots.flat().includes(time) && restDisableCondition && !isDisabled) ? 'auto' : 'none',
                  '&:hover': {
                    backgroundColor: (activeSlots.flat().includes(time) && restDisableCondition) ? '#F4C9C9' : 'transparent',
                  }
                }}
                onClick={() => {
                  handleAssign(slotIndex, !selectSlot, id);
                  setSelectSlot(!selectSlot);

                  if (selectSlot) {
                    setSelectedTime(null);
                  }
                  else {
                    setSelectedTime(time);
                  }
                }}
                color="primary"
              >
                {selectSlot ? '✓' : ''}
              </Button>

            </Stack>
          )
        })}
      </Stack >
    </Box>
  );
}