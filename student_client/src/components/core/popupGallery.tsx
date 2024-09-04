import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import { XCircle } from '@phosphor-icons/react';

interface PopupGalleryProps {
  images: string[];
  handlePopup: (value: boolean) => void;
}

export default function PopupGallery({ images, handlePopup }:PopupGalleryProps): React.JSX.Element{

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'ease-in-out 300ms',
  } ;

  return (
    <Box >
      <Box
        sx={{
          zIndex: 10,
          height: '80vh',
          p: 4,
          px: 1,
          borderRadius: 1,
          backdropFilter: 'blur( 8.5px )'
        }}
        width='50%'
     >
        <Box
          onClick={() => { handlePopup(false); }}
          sx={{
            position: 'absolute',
            top: 3,
            right: 5,
            zIndex: '20',
            fontSize: '33px',
            cursor: 'pointer',
            transition: 'ease-in-out 150ms',
            '&:hover': {
              transform: 'scale(1.1)',
            },
            color:'white'
          }}
        >
          <XCircle />
        </Box>
        <Box sx={{ overflowY: 'scroll', height: '73vh', overflowX: 'hidden',py:0 }}>
          <ImageList variant="masonry" sx={{px:2,overflowX: 'hidden' }} cols={3} gap={8}>
            {images.map((img, index) => (
              <ImageListItem
                key={index}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.01)',
                  },
                  transition: 'ease-in-out 250ms',
                }}
              >
                <img
                  srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${img}?w=248&fit=crop&auto=format`}
                  alt={`img-${index.toString()}`}
                  loading="lazy"
                  style={imageStyle}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
};

