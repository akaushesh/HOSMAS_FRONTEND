'use client';

import React, { useEffect, useState } from 'react';
import { Box, Divider, Grid, Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

import hostels from '../data';
import PopupGallery from '@/components/core/popupGallery';

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
  
  
  const [popup, setPopup] = useState<boolean>(false);

  const handlePopup = (value: boolean) => {
    setPopup(value);
  }


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
      {popup && <PopupGallery images={images} handlePopup={handlePopup} />  }


      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:1, gap:4 ,px: 3, py: 1, borderRadius: 1, mb: 2 }} elevation={3}>
        <Box mb={0.5}>
          <Typography variant="h2">{data?.name}</Typography>
          <Typography variant="subtitle2" >{data?.description}</Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
            <Typography textAlign={'center'} my={2}  variant="h6" fontSize={'17px'}>
              <Link color={'inherit'} href={`mailto:${data?.email}`} target={'_blank'}>
                {data?.email}
              </Link>
            </Typography>
            <Typography textAlign={'center'} my={2} variant="h6" fontSize={'17px'}>
              {data?.contact}
            </Typography>
          </Box>
      </Paper>

      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        gap={2}
        height={'42vh'}
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

        <Grid width={'39%'} height={1} container gap={2} >
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
              onClick={() => handlePopup(true)}
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
      
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:1, gap:5,mt:3}}>

          <Paper elevation={3}  sx={{px:2, py:1,width:1}}>

            <Box sx={{display:'flex',alignItems:'baseline',justifyContent:'start'}} gap={1} my={1} ml={2}>
                <Typography variant='h6' fontSize={'20px'}>•  Floors :</Typography>
                  <Typography variant='subtitle1' fontSize={'18px'}>{data?.floors}</Typography> 
            </Box>
              
            <Divider variant="middle" flexItem />
              
            <Box sx={{display:'flex',alignItems:'baseline',justifyContent:'start'}} gap={1} my={1} ml={2}>
                <Typography variant='h6' fontSize={'20px'}>•  Rooms :</Typography>
                  <Typography variant='subtitle1' fontSize={'18px'}>{data?.rooms}</Typography> 
            </Box>
              
            <Divider variant="middle" flexItem />
              
            <Box sx={{display:'flex',alignItems:'baseline',justifyContent:'start'}} gap={1} my={1} ml={2}>
                <Typography variant='h6' fontSize={'20px'}>•  Students :</Typography>
                  <Typography variant='subtitle1' fontSize={'18px'}>{data?.students}</Typography> 
            </Box>
         
          </Paper>

          <Divider orientation='vertical' variant="middle" flexItem />


          <Paper elevation={3}  sx={{px:2, py:1,width:1}}>
            <Box sx={{display:'flex',alignItems:'baseline',justifyContent:'start'}} gap={1} my={1} ml={2}>
                  <Typography variant='h6' fontSize={'20px'}>•  Warden :</Typography>
                    <Typography variant='subtitle1' fontSize={'18px'}>{data?.warden}</Typography> 
              </Box>

              <Divider variant="middle" flexItem />

              <Box sx={{display:'flex',alignItems:'baseline',justifyContent:'start'}} gap={1} my={1} ml={2}>
                  <Typography variant='h6' fontSize={'20px'}>•  Caretaker :</Typography>
                    <Typography variant='subtitle1' fontSize={'18px'}>{data?.caretaker}</Typography> 
              </Box>
         
          </Paper>

      </Box>
        


    </>
  );
}
