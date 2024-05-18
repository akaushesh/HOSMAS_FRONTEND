'use client';

import React, { useEffect, useState } from 'react';
import { Box, Divider, Grid, Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

import { hostel } from '@/types/hostels';
import PopupGallery from '@/components/core/popupGallery';
import HostelDescription from '@/components/dashboard/hostels/slug/HostelDescription';

import hostels from '../assets/hostelData';
import HostelCollage from '@/components/dashboard/hostels/slug/HostelCollage';

export default function Page({ params }: { params: { slug: string } }): React.JSX.Element {
  const id = params.slug;
  const [images, setImages] = useState<string[]>([]);
  const [data, setData] = useState<hostel | null>(null);

  const [popup, setPopup] = useState<boolean>(false);

  const handlePopup = (value: boolean) => {
    setPopup(value);
  };

  useEffect(() => {
    const hostel = hostels.find(({ path }) => id === path) as hostel;
    setData(hostel as hostel);
    setImages(hostel.image);
  });

  return (
    <Box sx={{ position: 'relative' }}>
      {popup && <PopupGallery images={images} handlePopup={handlePopup} />}

      <Box sx={{ position: 'absolute', top: 0, zIndex: 7 }}>
        <HostelDescription hostel={data} />
      </Box>

      <Box pt={23}>
        <HostelCollage hostel={data} images={images} handlePopup={handlePopup} height={'52vh'}/>
      </Box>



      

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1, gap: 5, mt: 3 }}>
        <Paper elevation={3} sx={{ px: 2, py: 1, width: 0.35 }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
            <Typography variant="h6" fontSize={'20px'}>
              • Floors :
            </Typography>
            <Typography variant="subtitle1" fontSize={'18px'}>
              {data?.floors}
            </Typography>
          </Box>

          <Divider variant="middle" flexItem />

          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
            <Typography variant="h6" fontSize={'20px'}>
              • Rooms :
            </Typography>
            <Typography variant="subtitle1" fontSize={'18px'}>
              {data?.rooms}
            </Typography>
          </Box>

          <Divider variant="middle" flexItem />

          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
            <Typography variant="h6" fontSize={'20px'}>
              • Students :
            </Typography>
            <Typography variant="subtitle1" fontSize={'18px'}>
              {data?.students}
            </Typography>
          </Box>
        </Paper>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Paper elevation={3} sx={{ px: 2, py: 1, width: 0.55 }}>
          {data?.warden && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize={'20px'}>
                  • Warden :
                </Typography>
                <Typography variant="subtitle1" fontSize={'18px'}>
                  {data?.warden}
                </Typography>
              </Box>

              <Divider variant="middle" flexItem />
            </>
          )}

          {data?.assistantWarden && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize={'20px'}>
                  • Assistant Warden :
                </Typography>
                <Typography variant="subtitle1" fontSize={'18px'}>
                  {data?.assistantWarden}
                </Typography>
              </Box>

              <Divider variant="middle" flexItem />
            </>
          )}

          {data?.dayCaretaker && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize={'20px'}>
                  • Day Caretaker :
                </Typography>
                <Typography variant="subtitle1" fontSize={'18px'}>
                  {data?.dayCaretaker}
                </Typography>
              </Box>

              <Divider variant="middle" flexItem />
            </>
          )}
          {data?.nightCaretaker && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize={'20px'}>
                  • Night Caretaker :
                </Typography>
                <Typography variant="subtitle1" fontSize={'18px'}>
                  {data?.nightCaretaker}
                </Typography>
              </Box>
            </>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
