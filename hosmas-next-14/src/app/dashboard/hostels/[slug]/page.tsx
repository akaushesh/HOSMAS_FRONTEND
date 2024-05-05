'use client';

import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

import hostels from '../data';

interface hostel {
  name: string;
  path: string;
  floors: number;
  rooms: number;
  students: number;
  warden: string;
  caretaker: string;
  contact: string;
  email: string;
  gender: string;
  image: string[];
  description: string;
}

export default function Page({ params }: { params: { slug: string } }): React.JSX.Element {
  const id = params.slug;
  const [images, setImages] = useState<string[]>([]);
  const [data, setData] = useState<hostel | null>(null);

  useEffect(() => {
    const hostel = hostels.find(({ path }) => id === path) as hostel;
    setData(hostel as hostel);
    setImages(hostel.image);
  });
  const styles = {} as any;

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'ease-in-out 300ms',
  } as any;

  return (
    <>
      <Paper sx={{ p: 1.5, borderRadius: 1, mb: 2 }} elevation={3}>
        <Typography variant="h1">{data?.name}</Typography>
      </Paper>

      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        gap={2}
        height={'50vh'}
        width={1}
      >
        <Box
          width={'63%'}
          height={1}
          sx={{
            position: 'relative',
            '&:hover img': {
              transform: 'scale(1.005)',
            },
          }}
        >
          <img alt={data?.name} src={images[0]} style={imageStyle} />
        </Box>

        <Grid width={'39%'} height={1} container gap={2}>
          {images.slice(1, 4).map((image, index) => (
            <Grid
              item
              xs={5.8}
              key={index}
              sx={{
                position: 'relative',
                '&:hover img': {
                  transform: 'scale(1.015)',
                },
              }}
            >
              <img src={image} alt={data?.name} style={imageStyle} />
            </Grid>
          ))}

          <Grid
            item
            xs={5.8}
            sx={{
              position: 'relative',
              '&:hover img': {
                transform: 'scale(1.015)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                zIndex: 2,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5 )',
                cursor: 'pointer',
              }}
              borderRadius={1}
              color={'white'}
              width={1}
              height={1}
            >
              {`+${images.length - 5} images`}
            </Box>
            <img src={images[4]} alt={data?.name} style={imageStyle} />
          </Grid>
        </Grid>
      </Box>

      <div className={styles.content}>
        <p>{data?.description}</p>
        <div className={styles.lowerCont}>
          <div className={styles.HostelInfo}>
            <p style={{ width: '25%' }}>
              <b>Floors</b> <p> {data?.floors}</p>
            </p>
            <p style={{ width: '25%' }}>
              <b>Rooms</b> <p> {data?.rooms}</p>
            </p>
            <p style={{ width: '40%' }}>
              <b>Student Capacity</b> <p> {data?.students}</p>
            </p>
          </div>
          <div className={styles.Contact}>
            <div>
              <div>
                <b>Caretaker : </b>
                {data?.caretaker}
              </div>
              <div>
                <b>Warden : </b>
                {data?.warden}
              </div>
            </div>
            <div>
              <p>{data?.email}</p>
              <p>{data?.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
