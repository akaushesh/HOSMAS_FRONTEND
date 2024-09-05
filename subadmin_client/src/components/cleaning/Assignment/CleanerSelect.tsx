'use client';

import * as React from 'react';
import { Divider, Paper, Stack, Typography } from '@mui/material';

import { tempCleaners } from '../TempDataRequests';
import { type CleanerProps } from './Assignment';

interface CleanerSelectorProps {
  selectedCleaner: CleanerProps;
  setSelectedCleaner: (val: CleanerProps) => void;
}

export function CleanerSelect({ selectedCleaner, setSelectedCleaner }: CleanerSelectorProps): React.JSX.Element {
  const cleaners = tempCleaners.filter((cleaner) => !cleaner.present);

  const handleCleanerClick = (cleaner: CleanerProps): void => {
    if (cleaner.id === selectedCleaner.id) {
      setSelectedCleaner({ id: '', name: '', present: false, img: '' });
    }
    else{
      setSelectedCleaner(cleaner);
    }
  };


  return (
    <Paper elevation={10} sx={{ p: 2, width: 0.3, height: 1 }}>
      <Stack direction="row" alignItems="center" gap={3}>
        <Typography variant="h5">Sanitation Cleaner</Typography>

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            background: 'var(--mui-palette-primary-main)',
            px: 2,
            aspectRatio: '1/1',
            borderRadius: 1,
            color: 'white',
            fontSize: '22px',
          }}
        >
          {cleaners.length}
        </Stack>
      </Stack>

      <Stack spacing={1.5} mt={3} sx={{ overflowY: 'auto', height: '50vh', width: 1 }}>
        {cleaners.map((cleaner) => {
          // console.log(selectedCleaner,cleaner);
          const isSelected = selectedCleaner.id === cleaner.id;
          return (
            <Stack
              direction="row"
              py={1.5}
              key={cleaner.id}
              sx={{
                cursor: 'pointer',
                boxShadow: 2,
                background: 'var(--mui-palette-secondary-light)',
                borderRadius:1,
                border: '1px dashed var(--mui-palette-secondary-main)',
                transition:'all 0.3s',
              }}
              ml={isSelected?0:2.5}
              mr={1}
              px={2}
              // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- ignore
              onClick={()=>handleCleanerClick(cleaner)}
              justifyContent="space-between"
              gap={9}
              alignItems="center"
            >
              <Stack direction='row' gap={2}>
                
                <Divider orientation="vertical" sx={{borderWidth:3, borderRadius:2,borderColor:isSelected?'var(--mui-palette-primary-main)':"var(--mui-palette-secondary-main)"}} flexItem />
                
                <Typography variant="h6" fontSize="20px" fontWeight={500}>
                  {cleaner.name}
                </Typography>


              </Stack>

              <Stack direction="row" gap={1} alignItems="center">
                <Typography
                  variant="h6"
                  fontSize="18px"
                  color="var(--mui-palette-text-primaryChannel)"
                  fontWeight={500}
                >
                  Assigned:
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="25px"
                  color="var(--mui-palette-text-secondaryChannel)"
                  fontWeight={500}
                >
                  {cleaner.assigned?.length || 0}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Paper>
  );
}
