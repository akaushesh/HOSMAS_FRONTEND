'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Box, Divider, Paper, Typography } from '@mui/material';

import type { Hostel } from '@/types/hostels';
import HostelCollage from '@/components/allocation/hostels/slug/HostelCollage';
import HostelDescription from '@/components/allocation/hostels/slug/HostelDescription';

import hostels from '../assets/HostelData';

// import CustomModal from '@/components/core/custom-modal';
// import PopupGallery from '@/components/core/PopupGallery';

export default function Page({ params }: { params: { slug: string } }): React.JSX.Element {
  const id = params.slug;
  const [images, setImages] = useState<string[]>([]);
  const [data, setData] = useState<Hostel | null>(null);



  useEffect(() => {
    const hostel = hostels.find(({ path }) => id === path)!;
    setData(hostel);
    setImages(hostel.image);
  }, [id]);

  return (
    <Box sx={{ position: 'relative', height: 'fit-content' }}>

      <Box sx={{ zIndex: 7 }}>
        <HostelDescription hostel={data} />
      </Box>

      <Box mt={4} pb={1}>
        <HostelCollage hostel={data} images={images}  height="52vh" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-evenly',
          width: 1,
          gap: { xs: 0, md: 2 },
          mt: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{ px: 3, py: 4, display: 'flex', justifyContent: 'center', gap: { xs: 0.3, sm: 2, },width: 1 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }} gap={0.9} my={0} px={1}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <MeetingRoomOutlinedIcon sx={{ fontSize: { xs: '30px', md: '30px', lg: '40px' } }} />
              <Typography sx={{ fontSize: { xs: '10px', md: '10px', lg: '12px' } }}>FLOORS</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ fontSize: { xs: '14px', md: '15px', lg: '18px' } }}>
              {data?.floors}
            </Typography>
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Box sx={{ display: 'flex', alignItems: 'center' }} gap={0.9} my={0} px={1}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <MeetingRoomOutlinedIcon sx={{ fontSize: { xs: '30px', md: '30px', lg: '40px' } }} />
              <Typography sx={{ fontSize: { xs: '10px', md: '10px', lg: '12px' } }}>ROOMS</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ fontSize: { xs: '14px', md: '15px', lg: '18px' } }}>
              {data?.rooms}
            </Typography>
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Box sx={{ display: 'flex', alignItems: 'center' }} gap={0.9} my={0} px={1}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PeopleAltOutlinedIcon sx={{ fontSize: { xs: '30px', md: '30px', lg: '40px' } }} />
              <Typography sx={{ fontSize: { xs: '10px', md: '10px', lg: '12px' } }}>STUDENTS</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ fontSize: { xs: '14px', md: '15px', lg: '18px' } }}>
              {data?.students}
            </Typography>
          </Box>
        </Paper>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Paper elevation={3} sx={{ px: 2, py: 2, width: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { title: 'Warden', value: data?.warden },
              { title: 'Assistant Warden', value: data?.assistantWarden },
              { title: 'Day Caretaker', value: data?.dayCaretaker },
              { title: 'Night Caretaker', value: data?.nightCaretaker },
            ]
              .filter((item) => item.value && item.value !== '')
              .map((item, index) => (
                <Box key={index}>
                  {index !== 0 && <Divider orientation="horizontal" variant="middle" sx={{ my: 1.5 }} />}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                        fontWeight: '500',
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Right: Name */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '12px', sm: '14px', md: '16px' },
                        flex: 2,
                        textAlign: 'right',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
