import * as React from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import type { Hostel } from '@/types/hostels';
import ImageSkeleton from '@/components/core/skeleton-image';

interface PropsType {
  hostel: Hostel | null;
  images: string[];
  height: string;
}

export default function HostelCollage({ hostel, images, height }: PropsType): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
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
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      gap={2}
      width={1}
      height={height}
    >
      <Box
        height={1}
        sx={{
          position: 'relative',
          width: { xs: 1, md: '63%' },
          '&:hover': {
            transform: 'scale(1.005)',
          },
          transition: 'ease-in-out 300ms',
        }}
      >
        <ImageSkeleton alt={hostel?.name} src={images[0]} style={imageStyle} />
      </Box>

      <Stack direction="row" gap={2} sx={{ width: { xs: 1, md: '36%' } }} height={1}>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row', md: 'column' } }} gap={2} width={1} height={1}>
          <Box
            height={1}
            sx={{
              position: 'relative',
              width: 1,
              '&:hover': {
                transform: 'scale(1.005)',
              },
              transition: 'ease-in-out 300ms',
            }}
          >
            <ImageSkeleton src={images[1]} alt={hostel?.name} style={imageStyle} />
          </Box>

          <Box
            height={1}
            sx={{
              position: 'relative',
              width: 1,
              '&:hover': {
                transform: 'scale(1.005)',
              },
              transition: 'ease-in-out 300ms',
            }}
          >
            <ImageSkeleton src={images[2]} alt={hostel?.name} style={imageStyle} />
          </Box>
        </Stack>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row', md: 'column' } }} gap={2} width={1} height={1}>
          <Box
            height={1}
            sx={{
              position: 'relative',
              width: 1,
              '&:hover': {
                transform: 'scale(1.005)',
              },
              transition: 'ease-in-out 300ms',
            }}
          >
            <ImageSkeleton src={images[3]} alt={hostel?.name} style={imageStyle} />
          </Box>

          <Box
            height={1}
            sx={{
              position: 'relative',
              width: 1,
              '&:hover': {
                transform: 'scale(1.005)',
              },
              transition: 'ease-in-out 300ms',
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
                handleOpen();
              }}
              borderRadius={1}
              color="white"
              width={1}
              height={1}
            >
              {`+${String(images.length - 5)} images`}
            </Box>
            <ImageSkeleton src={images[4]} alt={hostel?.name} style={imageStyle} />
          </Box>
        </Stack>
      </Stack>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h3">{hostel?.name} Images</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            p: 4,
          }}
        >
            <Box
              sx={{
                height: '55vh',
                overflowY: 'auto',
                pr:1,
              }}
            >
              <ImageList variant="masonry" cols={3} gap={8}>
                {images.map((img, index) => (
                  <ImageListItem key={img}>
                    <ImageSkeleton
                      srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${img}?w=248&fit=crop&auto=format`}
                      alt={`Image ${String(index + 1)}`}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
