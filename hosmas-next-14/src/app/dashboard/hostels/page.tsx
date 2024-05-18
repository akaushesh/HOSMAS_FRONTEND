'use client';

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import HostelCarousel from '@/components/dashboard/hostels/HostelCarousel';
import HostelSelectors from '@/components/dashboard/hostels/HostelSelectors';

import hostels from './assets/hostelData';

export default function Page(): React.JSX.Element {
  const [pause, setPause] = useState(false);
  const [current, setCurrent] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setPause(true);
    setCurrent(index);
  };
  const handleMouseLeave = () => {
    setPause(false);
    setCurrent(-1);
  };

  return (
    <Box
      sx={{
        '--Card-Subheading-FontColor': 'var(--mui-palette-text-primaryChannel)',
        '--Card-Hostel-FontColor': 'var(--mui-palette-text-primary)',
        '--Button-Color': '#f8f8f8db',
        '--Button-HoverColor': 'var(--mui-palette-secondary-light)',
        '--Button-FontColor': 'var(--mui-palette-text-primary)',
        position: 'relative',
      }}
    >
      <HostelCarousel hostels={hostels} pause={pause} current={current} />

      <Box zIndex={20} width={1} sx={{ position: 'absolute', bottom: 30 }}>
        <HostelSelectors
          hostels={hostels}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          current={current}
        />
      </Box>
    </Box>
  );
}
