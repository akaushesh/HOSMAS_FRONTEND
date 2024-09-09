'use client';

import * as React from 'react';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';

import { tempRequests } from '../TempDataRequests';
import { type CleanerProps, type RequestProps } from './Assignment';

interface RequestsProps {
  handleAssignCleaner: (assignedSlot: { from: string; to: string }, assign: boolean, roomName: string,requestId:string) => void;
  selectedCleaner: CleanerProps;
}

export function Requests({ handleAssignCleaner,selectedCleaner }: RequestsProps): React.JSX.Element {
  const [cleaningRequests, setCleaningRequests] = React.useState<RequestProps[]>(tempRequests);

  const isDisabled=selectedCleaner.id==='';

  const handleAssign = (slot:number,assign:boolean,id:string): void => {
    if(assign){
        // Setting Requests
        setCleaningRequests([...cleaningRequests.map((req) => {
          if(req.id===id){
            req.assigned = selectedCleaner.id;
            req.selectedSlot = req.slots[slot];
          }
          return req;
        })]);

        const req=cleaningRequests.find((req)=>req.id===id);
        if (req) {
          handleAssignCleaner(req.selectedSlot as {from:string;to:string},true,req.roomName,req.id);
        }

    }
    else{
        // Setting Cleaners
        setCleaningRequests([...cleaningRequests.map((req) => {
          if(req.id===id){
            req.assigned = '';
            req.selectedSlot = {from:'',to:''};
          }
          return req;
        })]);

        const req=cleaningRequests.find((req)=>req.id===id);
        if (req) {
          handleAssignCleaner(req.selectedSlot as {from:string;to:string},false,req.roomName,req.id);
        }

    }
  }

  return (
    <Paper elevation={10} sx={{ p: 3, width: 0.65}}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Cleaning Requests</Typography>
        <Box>Filters</Box>
      </Stack>
      <Box mt={3} sx={{overflowY: 'auto', height: '47vh', width: 1,
        opacity: isDisabled ? 0.5 : 1,
       }}>
        {cleaningRequests.map((request, index) => {
          return (
            <Box key={request.id}>
              <Stack direction="row" py={1} justifyContent="flex-start" gap={9} alignItems="center">
                <Typography variant="h6" fontSize="20px" fontWeight={500}>
                  {request.roomName}
                </Typography>
                <Box zIndex={1}>
                  <SpecialButton handleAssign={handleAssign} isDisabled={isDisabled} id={request.id} slots={request.slots} />
                </Box>
              </Stack>
              {cleaningRequests.length - 1 !== index && <Divider sx={{ my: 0.4 }} />}
            </Box>
          );
        })}
      </Box>

      <Stack direction="row" justifyContent="space-between" mt={4} width={1}>
        <Typography variant="h6">* Select a worker to assign cleaning</Typography>
        <Button variant="contained" sx={{ px: 6 }} color="primary">
          Save
        </Button>
      </Stack>
    </Paper>
  );
}





function SpecialButton({ slots,isDisabled,handleAssign ,id}: { slots: { from: string; to: string }[]; isDisabled:boolean;handleAssign:(slot:number,assign:boolean,id:string)=>void; id:string}): React.JSX.Element {
  const timings = [9, 10, 11, 12, 1, 2, 3, 4, 5];

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
          const [selectSlot, setSelectSlot] = React.useState(false);
          const dividerColorCondition=activeSlots.flat().includes(time)||(
            activeSlots.flat().includes(time-1)&& time!==5) || ( time===1&& activeSlots.flat().includes(12));

          const slotIndex=activeSlots.findIndex((slot)=>slot.includes(time));
          
          const restDisableCondition = selectedTime === null || selectedTime === time;

          return (
            <Stack key={time} direction="row" alignItems="end" justifyContent="center">

              <Stack direction="column" alignItems="center" width="14px">
                <Typography variant="caption" sx={{ p: 0, color: 'var(--TextMain-Color)' }}>
                  {time}
                </Typography>

                <Divider
                  sx={{
                    backgroundColor: index === 0 ? 'transparent' : 'var(--mui-palette-secondary-main)',
                    borderWidth: index === 0 ? 0 : '1px',
                    borderStyle: 'solid',
                    borderColor: (dividerColorCondition &&restDisableCondition)?'var(--mui-palette-primary-main)':'var(--mui-palette-secondary-main)',
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
                  backgroundColor: (activeSlots.flat().includes(time) &&restDisableCondition) ?'#F4C9C9':'transparent',
                  pointerEvents: (activeSlots.flat().includes(time) &&restDisableCondition && !isDisabled) ? 'auto' : 'none',
                  '&:hover': {
                    backgroundColor: (activeSlots.flat().includes(time) && restDisableCondition) ?'#F4C9C9':'transparent',
                  }
                }}
                onClick={() => {
                  handleAssign(slotIndex,!selectSlot,id);
                  setSelectSlot(!selectSlot);
                 
                  if(selectSlot){
                    setSelectedTime(null); 
                  } 
                  else{
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