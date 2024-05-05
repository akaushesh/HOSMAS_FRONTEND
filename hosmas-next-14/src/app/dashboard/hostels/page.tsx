'use client';

import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import hostels from './data';
import { Box, Fade, Paper, Typography } from '@mui/material';



export default function Page(): React.JSX.Element {


  const router = useRouter();
  const defaultwp =
    'https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg';

  const [wallpaper, setWallpaper] = useState<string>(defaultwp);
  const [name, setName] = useState<string>('');

  const handleMouseEnter = (image: string, name: string) => {
    setWallpaper(image);
    setName(name);
  };
  const handleMouseLeave = () => {
    setWallpaper(defaultwp);
    setName('');
  };

  const handleHostelClick = (path: string) => {
    router.push('/dashboard/hostels/' + path);
  };

  return (
    <>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",
            position: 'relative',
          }} gap={5} px={4} py={4}>
            
            <Box sx={{position:"absolute",zIndex:1,top:0,left:0,backgroundImage: `url(${wallpaper})`,
            backgroundSize: 'cover',
            transition:"background-image ease 350ms",
            boxShadow: 'inset 0 0 7px #fff ',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',}} width={1} height={1} borderRadius={2} ></Box>

        <Paper sx={{width:"30%",borderRadius:1  ,height:"69vh",display:"flex",alignItems:"center",flexDirection:'column',py:4,gap:4,px:2,zIndex:2}} elevation={5}>

        <Typography variant='h2'>Hostels</Typography>
          
          <Box width={1}height={1}  px={3}  py={1} sx={{display:"flex",alignItems:"center",flexDirection:'column',overflowY:"auto",overflowX:"hidden"}} gap={2}>
            {hostels.map((hostel, index) => {
              return (
                <Paper
                  key={index}
                  onClick={() => handleHostelClick(hostel.path)}
                  onMouseEnter={() => handleMouseEnter(hostel.image[0], hostel.name)}
                  onMouseLeave={() => handleMouseLeave()}
                  sx={{display:"flex",width:1,alignItems:"baseline",justifyContent:"center",cursor:"pointer",borderRadius:1,px:1,gap:2,py:2}}
                  elevation={5}
                  >
                  <Typography variant='h5'>{hostel.name}</Typography>
                  <Typography variant='body2'>{`${hostel.gender} Hostel`}</Typography>
                </Paper>
               
              );
            })}
          </Box>

        </Paper>



        <Box width={"65%"} sx={{display:"flex",alignItems:"center",justifyContent:"center"}} height={1} zIndex={2}>
          {name !== '' && (
              <Typography variant='h1' sx={{textShadow:"0 0 10px #000"}} color={"white"}>{name}</Typography >
          )}
        </Box>

      </Box>
    </>
  );
}
