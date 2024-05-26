import  React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import type { hostel } from '@/types/hostels';

interface PropsType {
  hostels: hostel[];
  pause: boolean;
  current: number;
}

export default function HostelCarousel({ hostels, pause, current }: PropsType): React.JSX.Element {
  const router = useRouter();
  const handleHostelClick = (path: string) => {
    router.push(`/dashboard/hostels/${path}`);
  };

  return (
    <Carousel indicators={false} strictIndexing stopAutoPlayOnHover={false} autoPlay={!pause}>
      {hostels.map((hostel, index) => {
        hostel = pause ? hostels[current] : hostel;
        return (
          <Box
            key={index}
            sx={{
              width: 1,
              height: '70vh',
              position: 'relative',
              cursor: 'pointer',
            }}
            onClick={() => handleHostelClick(hostel.path)}
            >
            <img
              src={hostel.image[0]}
              alt={hostel.name}
              style={{
                width: '100%',
                borderRadius: '14px',
                position: 'absolute',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <Box zIndex={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: 1 }} p={3}>
              <Box
                sx={{
                  background: '#FDFDFD',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'ease 250ms',
                  textAlign: 'center',
                }}
                width={'fit-content'}
                borderRadius={1}
                p={2}
                >
                <Typography variant="h6" color={'var(--Card-Subheading-FontColor)'}>
                  {'HOSTEL'}
                </Typography>
                <Typography variant="h2" color={'var(--Card-Heading-FontColor)'}>
                  {hostel.name.split(' ')[1]}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
}
