'use client';

import * as React from 'react';
import { Box, CircularProgress, InputAdornment, OutlinedInput } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { type Dayjs } from 'dayjs';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface EleProps{
  searchFilters:{date:string;
  name:string;};
  setSearchFilters:(val:{date:string;name:string;})=>void;
}

export default function SearchCleaning({searchFilters,setSearchFilters}:EleProps): React.JSX.Element {

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchFilters({date:searchFilters.date,name:event.target.value});
  };

  const changeSlot = (newValue: Dayjs | null): void => {
    setSearchFilters({date:dayjs(newValue).format('YYYY-MM-DD'),name:searchFilters.name});
  };



  const isPending=false;

  return (
    <Box mt={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} gap={2}>
      <DatePicker
        slotProps={{ textField: { size: 'small' } }}
        sx={{ width: '36%' }}
        value={dayjs(searchFilters.date)}
        onAccept={(newValue) => {
          changeSlot(newValue);
        }}
        disableFuture
        label="Search By Date"
      />

      <OutlinedInput
        fullWidth
        size="small"
        value={searchFilters.name}
        onChange={handleChangeName}
        placeholder="Search By Janitor"
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlass fontSize="var(--icon-fontSize-md)" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {isPending ? <CircularProgress color="inherit" size={20} /> : null}
          </InputAdornment>
        }
        sx={
            { width: { xs: '50%', md: '65%' }, transition: 'ease-in-out 200ms' }
        }
      />

      
    </Box>
  );
}
