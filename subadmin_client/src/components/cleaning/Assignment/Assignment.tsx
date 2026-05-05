'use client';

import * as React from 'react';
import { Stack } from '@mui/material';

import { Requests } from './Requests';
import { CleanerSelect } from './CleanerSelect';
import { useProfile } from '@/hooks/query/use-profile';

export interface RequestProps {
  id: string;
  roomName: string;
  slots: { from: string; to: string }[];
  assignedId?: string;
  assignedName?: string;
  selectedSlot?: { from: string; to: string };
}

export interface CleanerProps {
  id: string;
  name: string;
  present: boolean;
  img: string;
  assigned?: { requestId: string; roomName: string; slot: { from: string; to: string } }[];
}

export function Assignment(): React.JSX.Element {

  const [selectedCleaner, setSelectedCleaner] = React.useState<CleanerProps>({
    id: '',
    name: '',
    present: false,
    img: '',
    assigned: [{
      requestId: '',
      roomName: '',
      slot: { from: '', to: '' },
    }],
  });

  const [cleaners, setCleaners] = React.useState<CleanerProps[]>([]);
  const [isLoadingCleaners, setIsLoadingCleaners] = React.useState<boolean>(true);
  const { data } = useProfile();

  React.useEffect(() => {
    const fetchCleaners = async () => {
      try {
        if (data?.data?.supervisor?.hostel?.id) {
          const { getWorkersOfHostel } = await import('@/services/cleaning');
          const response = await getWorkersOfHostel(data.data.supervisor.hostel.id);
          const activeWorkers = response.data.map((w: any) => ({
            id: w.id.toString(),
            name: w.name,
            present: w.attendance?.is_present || false,
            img: w.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
            assigned: []
          })).filter((w: any) => true); // Show all workers for now since attendance is missing
          setCleaners(activeWorkers);
        }
      } catch (error) {
        console.error('Error fetching cleaners:', error);
      } finally {
        setIsLoadingCleaners(false);
      }
    };
    
    if (data?.data?.supervisor?.hostel?.id) {
      fetchCleaners();
    } else if (data !== undefined) {
      setIsLoadingCleaners(false);
    }
  }, [data]);

  const handleAssignCleaner = (assignedSlot: { from: string; to: string }, assign: boolean, roomName: string, requestId: string): void => {
    if (assign) {
      // Setting Cleaners
      setCleaners([...cleaners.map((cleaner) => {
        if (cleaner.id === selectedCleaner.id) {
          if (cleaner.assigned) {
            cleaner?.assigned.push({ requestId, roomName, slot: assignedSlot });
          }
          else {
            cleaner.assigned = [{ requestId, roomName, slot: assignedSlot }];
          }
        }
        return cleaner;
      })]);
    }
    else {
      // Unassigning cleaner from a request
      setCleaners((prevCleaners) =>
        prevCleaners.map((cleaner) => {
          // eslint-disable-next-line @typescript-eslint/no-shadow -- ignore
          if (cleaner.assigned?.some((assign) => assign.requestId === requestId)) {
            return {
              ...cleaner,
              // eslint-disable-next-line @typescript-eslint/no-shadow -- ignore
              assigned: cleaner.assigned.filter((assign) => assign.requestId !== requestId),
            };
          }
          return cleaner;
        })
      );
    }
  }

  console.log(cleaners);

  return (
    <Stack direction="row" justifyContent='space-between' alignItems='stretch' height='66vh' width={1} mt={4}>
      <Requests handleAssignCleaner={handleAssignCleaner} selectedCleaner={selectedCleaner} />
      <CleanerSelect cleaners={cleaners} selectedCleaner={selectedCleaner} setSelectedCleaner={setSelectedCleaner} isLoading={isLoadingCleaners} />
    </Stack>
  );
}