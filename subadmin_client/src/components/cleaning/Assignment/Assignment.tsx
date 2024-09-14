'use client';

import * as React from 'react';
import { Stack } from '@mui/material';

import { Requests } from './Requests';
import { CleanerSelect } from './CleanerSelect';
import { tempCleaners } from '../TempDataRequests';

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
  assigned?: { requestId:string;roomName: string; slot:{from: string; to: string}}[];
}

export function Assignment(): React.JSX.Element {
 
    const [selectedCleaner, setSelectedCleaner] = React.useState<CleanerProps>({
    id: '',
    name: '',
    present: false,
    img: '',
    assigned: [{
        requestId:'',
        roomName: '',
        slot: {from: '', to: ''},
    }],
  });

    const [cleaners,setCleaners] = React.useState<CleanerProps[]>(tempCleaners.filter((cleaner) => !cleaner.present))

    const handleAssignCleaner = (assignedSlot:{from:string;to:string},assign:boolean,roomName:string,requestId:string): void => {
      if(assign){
          // Setting Cleaners
          setCleaners([...cleaners.map((cleaner) => {
            if(cleaner.id === selectedCleaner.id){
              if(cleaner.assigned){
                cleaner?.assigned.push({ requestId,roomName, slot: assignedSlot });
              }
              else{
                cleaner.assigned=[{ requestId,roomName, slot: assignedSlot }];
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
      <CleanerSelect cleaners={cleaners} selectedCleaner={selectedCleaner} setSelectedCleaner={setSelectedCleaner} />
    </Stack>
  );
}
