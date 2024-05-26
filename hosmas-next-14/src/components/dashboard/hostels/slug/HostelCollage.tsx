import React from 'react';
import { Box, Grid } from '@mui/material';

import type { hostel } from '@/types/hostels';

interface PropsType {
  hostel: hostel | null;
  images: string[];
  height: string;
  handlePopup: (value: boolean) => void;
}

export default function HostelCollage({ hostel, images, handlePopup, height }: PropsType): React.JSX.Element {
  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'ease-in-out 300ms',
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
      gap={2}
      width={1}
      height={height}
    >
      <Box
        width="63%"
        height={1}
        sx={{
          position: 'relative',
          '&:hover img': {
            transform: 'scale(1.005)',
          },
        }}
      >
        <img alt={hostel?.name} src={images[0]} style={imageStyle} />
      </Box>

      <Grid width="39%" height={1} container gap={2}>
        {images.slice(1, 4).map((image, index) => (
          <Grid
            item
            xs={5.8}
            // eslint-disable-next-line react/no-array-index-key -- no property on image to reference
            key={index}
            sx={{
              position: 'relative',
              '&:hover img': {
                transform: 'scale(1.015)',
              },
            }}
          >
            <img src={image} alt={hostel?.name} style={imageStyle} />
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
            onClick={() => {
              handlePopup(true);
            }}
            borderRadius={1}
            color="white"
            width={1}
            height={1}
          >
            {`+${String(images.length - 5)} images`}
          </Box>
          <img src={images[4]} alt={hostel?.name} style={imageStyle} />
        </Grid>
      </Grid>
    </Box>
  );
}
