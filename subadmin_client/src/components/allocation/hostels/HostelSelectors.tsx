import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button } from '@mui/material';

import type { hostel } from '@/types/hostels';

interface PropsType {
  hostels: hostel[];
  current: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}

export default function HostelSelectors({
  hostels,
  current,
  handleMouseEnter,
  handleMouseLeave,
}: PropsType): React.JSX.Element {
  const router = useRouter();
  const handleHostelClick = (path: string): void => {
    router.push(`/allocation/hostels/${path}`);
  };

  return (
    <Box
      gap={0.7}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 30, flexWrap: 'wrap' }}
    >
      {hostels.map((hostel, index) => {
        return (
          <Button
            sx={{
              px: current === index ? 4 : 2,
              fontSize: current === index ? 16 : 13,
              mx: current === index ? 0.5 : '',
              scale: current === index ? 1.02 : '',
              zIndex: current === index ? 20 : 1,
              boxShadow: '0 0 10px #00000060',
              background: 'var(--Button-Color)',
              color: 'var(--Button-FontColor)',
              '&:hover': { background: 'var(--Button-HoverColor)' },
              transition: 'ease 250ms',
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
            key={hostel.emailW}
            onClick={() => {
              handleHostelClick(hostel.path);
            }}
          >
            {hostel.name}
          </Button>
        );
      })}
    </Box>
  );
}
