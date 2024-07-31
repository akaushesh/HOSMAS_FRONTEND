'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Box, Divider, Paper, Typography } from '@mui/material';

import type { hostel } from '@/types/hostels';
import HostelCollage from '@/components/dashboard/hostels/slug/HostelCollage';
import HostelDescription from '@/components/dashboard/hostels/slug/HostelDescription';

import hostels from '../assets/HostelData';
import CustomModal from '@/components/core/custom-modal';
import PopupGallery from '@/components/core/PopupGallery';

export default function Page({ params }: { params: { slug: string } }): React.JSX.Element {
  const id = params.slug;
  const [images, setImages] = useState<string[]>([]);
  const [data, setData] = useState<hostel | null>(null);

  const [popup, setPopup] = useState<boolean>(false);

  const handlePopup = (value: boolean): void => {
    setPopup(value);
  };

  useEffect(() => {
    const hostel = hostels.find(({ path }) => id === path)!;
    setData(hostel);
    setImages(hostel.image);
  }, [id]);

  return (
    <Box sx={{ position: 'relative',height:"fit-content" }} >

      <CustomModal open={popup} onClose={():void => { handlePopup(false); }}>
        <PopupGallery images={images} handlePopup={handlePopup} />
      </CustomModal>

      {/* {popup ? <PopupGallery images={images} handlePopup={handlePopup} /> : null} */}

      <Box sx={{ position: 'absolute', top: 0, zIndex: 7 }}>
        <HostelDescription hostel={data} />
      </Box>

      <Box pt={30} pb={1}>
        <HostelCollage hostel={data} images={images} handlePopup={handlePopup} height="52vh" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1, gap: 5, mt: 3 }}>
        <Paper elevation={3} sx={{ px: 2, py: 1, width: 0.35, display: 'flex', gap: '20px' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid #000', paddingRight: '10px' }}
            gap={1}
            my={1}
            ml={2}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <MeetingRoomOutlinedIcon sx={{ fontSize: '40px' }} />
              <Typography fontSize="12px">FLOORS</Typography>
            </Box>
            <Typography variant="subtitle1" fontSize="18px">
              {data?.floors}
            </Typography>
          </Box>

          <Box
            sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid #000', paddingRight: '10px' }}
            gap={1}
            my={1}
            ml={2}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <MeetingRoomOutlinedIcon sx={{ fontSize: '40px' }} />
              <Typography fontSize="12px">ROOMS</Typography>
            </Box>
            <Typography variant="subtitle1" fontSize="18px">
              {data?.rooms}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1} my={1} ml={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PeopleAltOutlinedIcon sx={{ fontSize: '40px' }} />
              <Typography fontSize="12px">STUDENTS</Typography>
            </Box>
            <Typography variant="subtitle1" fontSize="18px">
              {data?.students}
            </Typography>
          </Box>
          {/* 
          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
            <Typography variant="h6" fontSize="20px">
              • Rooms :
            </Typography>
            <Typography variant="subtitle1" fontSize="18px">
              {data?.rooms}
            </Typography>
          </Box>


          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
            <Typography variant="h6" fontSize="20px">
              • Students :
            </Typography>
            <Typography variant="subtitle1" fontSize="18px">
              {data?.students}
            </Typography>
          </Box> */}
        </Paper>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Paper elevation={3} sx={{ px: 2, py: 1, width: 0.55 }}>
          {data?.warden ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize="20px">
                  Warden :
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  {data?.warden}
                </Typography>
              </Box>

              {/* <Divider variant="middle" flexItem /> */}
            </>
          ) : null}

          {data?.assistantWarden ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize="20px">
                  Assistant Warden :
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  {data?.assistantWarden}
                </Typography>
              </Box>

              {/* <Divider variant="middle" flexItem /> */}
            </>
          ) : null}

          {data?.dayCaretaker ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
                <Typography variant="h6" fontSize="20px">
                  Day Caretaker :
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  {data?.dayCaretaker}
                </Typography>
              </Box>

              {/* <Divider variant="middle" flexItem /> */}
            </>
          ) : null}
          {data?.nightCaretaker ? (
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'start' }} gap={1} my={1} ml={2}>
              <Typography variant="h6" fontSize="20px">
                Night Caretaker :
              </Typography>
              <Typography variant="body2" fontSize="18px">
                {data?.nightCaretaker}
              </Typography>
            </Box>
          ) : null}
        </Paper>
      </Box>
    </Box>
  );
}
