'use client';

import { relative } from 'path';

import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Fade, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import hostels from './assets/hostelData';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const handleHostelClick = (path: string) => {
    router.push('/dashboard/hostels/' + path);
  };

  const [pause, setPause] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [index, setIndex] = useState(1);
  

  const handleMouseEnter = (index: number) => {
    setPause(true);
    setCurrent(index);
  }
  const handleMouseLeave = () => {
    setPause(false);
    setCurrent(-1);
  }


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
      <Carousel indicators={false} strictIndexing={true} stopAutoPlayOnHover={false} autoPlay={!pause}>
        {hostels.map((hostel, index) => {
          hostel=pause?hostels[current]:hostel;
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

              <Box
                zIndex={1}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: 1 }}
                p={3}
              >
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



      <Box
        zIndex={20}
        width={1}
        sx={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',bottom:30,flexWrap:'wrap' }}
        gap={0.7}
      >
        {hostels.map((hostel, index) => {
          return (

              <Button
                sx={{
                  px: current==index?4:2,
                  fontSize:current==index?16:13,
                  mx:current==index?1:'',
                  scale:current==index?"1.4":"",
                  zIndex:current==index?20:1,
                  boxShadow:"0 0 10px #00000060",
                  background: 'var(--Button-Color)',
                  color: 'var(--Button-FontColor)',
                  '&:hover': { background: 'var(--Button-HoverColor)' },
                  transition: 'ease 250ms',
                }}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                key={index}
                onClick={() => handleHostelClick(hostel.path)}
              >
                {hostel.name}
              </Button>
              
          );
        })}
      </Box>
    </Box>
  );
}
