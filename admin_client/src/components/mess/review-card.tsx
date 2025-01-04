'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';

interface CardProps {
  id: string;
  name: string;
  roll_num: number;
  rating: number;
  description: string;
  date: string;
  timing: string;
}

interface ReviewProps {
  arr: CardProps[];
}

export default function Reviews({ arr }: ReviewProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [selectedReview, setSelectedReview] = React.useState<CardProps | null>(null);

  const handleOpen = (review: CardProps): void => {
    setSelectedReview(review);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setSelectedReview(null);
  };

  return (
    <Stack mt={2} width={1} flexWrap="wrap" direction="row" justifyContent="space-evenly" gap={5}>
      {arr.map((review) => (
        <Stack
          key={review.id}
          direction={{xs:'column',md:"row"}}
          alignItems="center"
          justifyContent="space-between"
          gap={{ xs: 1, md: 4 }}
          p={2}
          sx={{ width: { xs: 1, md: '47%' }, background: 'white', borderRadius: 1 }}
        >
          <Stack alignItems="center" gap={{ xs: 0.4, md: 1 }} sx={{ width: { xs: 1, md: 'auto' } }}>
            <Rating
              name="read-only"
              value={review.rating}
              readOnly
              sx={{
                marginBottom: 1,
                '& .MuiRating-icon': {
                  fontSize: { xs: '15px', md: '25px' },
                  color: 'var(--mui-palette-primary-main)',
                },
              }}
            />
            <Stack alignItems="center" direction={{ xs: 'row', md: 'column' }} gap={{xs:1,md:0.5}}>
              <Typography variant="h5" fontSize={{ xs: '19px', md: '25px' }}>
                {dayjs(review.date).format('DD MMM')}
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={{ xs: '19px', md: '16px' }} fontWeight={400}>
                {review.timing}
              </Typography>
            </Stack>
          </Stack>

          <Stack width="100%">
            <Typography
              variant="body2"
              textAlign="justify"
              alignSelf="center"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4, 
              }}
            >
              {review.description}
            </Typography>
            <Button
              variant="contained"
              sx={{ alignSelf: 'flex-end', py: 0.4, mt: 2, mb: 1, borderRadius: 1, px: 3 }}
              onClick={() => {
                handleOpen(review);
              }}
            >
              Detail
            </Button>
          </Stack>
        </Stack>
      ))}

      {selectedReview ? (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" color="text.secondaryChannel">
              Review
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'right' }}>
              <Typography variant="h6" fontSize="20px" color="text.primary">
                {selectedReview.name}
              </Typography>
              <Typography variant="body1" fontSize="14px" color="text.secondary">
                {selectedReview.roll_num}
              </Typography>
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            <Stack>
              <Stack
                direction="row"
                mb={1.5}
                gap={1.1}
                alignItems="flex-end"
                sx={{ display: { xs: 'flex', sm: 'none' } }}
              >
                <Typography variant="h6" fontSize="19px" fontWeight={600} color="text.primary">
                  {selectedReview.name}
                </Typography>
                <Typography variant="body1" fontSize="15px" fontWeight={400} color="text.secondary">
                  {selectedReview.roll_num}
                </Typography>
              </Stack>
              <Typography variant="h6" fontSize={{ xs: '14px', sm: '16px' }} fontWeight={400} textAlign="justify">
                <Box display="inline" sx={{ fontSize: { xs: '16px', sm: '18px' }, fontWeight: '600' }}>
                  Date:
                </Box>{' '}
                {dayjs(selectedReview.date).format('DD MMMM, YYYY')}
              </Typography>
              <Typography
                mt="10px"
                fontSize={{ xs: '14px', sm: '16px' }}
                variant="h6"
                fontWeight={400}
                textAlign="justify"
              >
                <Box display="inline" sx={{ fontSize: { xs: '16px', sm: '18px' }, fontWeight: '600' }}>
                  Timing:
                </Box>{' '}
                {selectedReview.timing}
              </Typography>
              <Typography
                variant="body1"
                mt={3}
                sx={{
                  height: '35vh',
                  overflowY: 'auto',
                  textAlign: 'justify',
                  pr: 1,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {selectedReview.description}
              </Typography>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" sx={{ my: 0.5, mr: 1, py: 0.6, fontSize: '14px' }} onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </Stack>
  );
}
