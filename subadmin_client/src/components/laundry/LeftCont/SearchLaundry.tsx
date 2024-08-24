'use client';

import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { type Dayjs } from 'dayjs';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface EleProps{
  searchFilters:{dateGiven:string;};
  setSearchFilters:(val:{dateGiven:string})=>void;
}

export default function SearchLaundry({searchFilters,setSearchFilters}:EleProps): React.JSX.Element {


  const changeSlot = (newValue: Dayjs | null): void => {
    setSearchFilters({dateGiven:dayjs(newValue).format('YYYY-MM-DD')});
  };


  return (
    <Box mt={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} gap={2}>
      <DatePicker
        slotProps={{ textField: { size: 'small' } }}
        sx={{ width: '36%' }}
        value={dayjs(searchFilters.dateGiven)}
        onAccept={(newValue) => {
          changeSlot(newValue);
        }}
        disableFuture
        label="Search By Date"
      />

      
    </Box>
  );
}
