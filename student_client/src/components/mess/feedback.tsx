'use client';

import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, Paper, Rating, Stack, Typography } from '@mui/material';


type Items = Record<string, 'veg' | 'non-veg'>;

type MealTimings = Record<string, Items>;

interface MenuItems {
  Breakfast: MealTimings;
  Lunch: MealTimings;
  Dinner: MealTimings;
}

interface FeedbackProps {
  timing: 'Breakfast' | 'Lunch' | 'Dinner';
  day: string;
  menuItems: MenuItems;
}

export default function Feedback({ timing, day, menuItems }: FeedbackProps): React.JSX.Element {
  const currentMenuItems = menuItems[timing][day] || {};

  const [ratings, setRatings] = React.useState<Record<string, number>>(
    Object.keys(currentMenuItems).reduce<Record<string, number>>((acc, item) => {
      acc[item] = 0; 
      return acc;
    }, {})
  );

  const handleRatingChange = (item: string, value: number | null):void => {
    if (value !== null) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [item]: value,
      }));
    }
  };

  const handleReset = (): void => {
    setRatings(
      Object.keys(currentMenuItems).reduce<Record<string, number>>((acc, item) => {
        acc[item] = 0; 
        return acc;
      }, {})
    );
  };

  const isDisabled = Object.values(ratings).every((rating) => rating === 0);

  return (
    <Stack>
      <Box sx={{ height: '43vh', overflowY: 'auto', pb: 1.5 }}>
        {Object.entries(currentMenuItems).map(([item, type]) => (
          <Paper
            key={`${timing}-${item}`}
            sx={{
              px: { xs: 1, md: 2 },
              py: 1.5,
              mx: { xs: 1, md: 2 },
              my: 1,
              background: 'var(--mui-palette-secondary-light)',
              border: '1px dashed var(--mui-palette-secondary-main)',
            }}
            elevation={10}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
              <Stack direction="row" alignItems="center" sx={{ ml: { xs: 0, md: 2 }, gap: { xs: 3, md: 6 } }}>
                <Stack
                  sx={{
                    p: 0,
                    border: type === 'veg' ? '4px solid green' : '4px solid #8C0606',
                    borderRadius: 0.4,
                    borderWidth: { xs: '2px', md: '3px' },
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: { xs: '13px', md: '16px' },
                      color: type === 'veg' ? 'green' : '#8C0606',
                    }}
                  />
                </Stack>

                <Typography variant="h6" sx={{ fontSize: { xs: '14px', md: '19px' } }}>
                  {item}
                </Typography>
              </Stack>

              <Rating
                name={`rating-${item}`}
                value={ratings[item]}
                onChange={(event, newValue) => { handleRatingChange(item, newValue); }}
                sx={{
                  '& .MuiRating-icon': {
                    
                    fontSize: { xs: '18px', sm: '27px' },
                    color:'var(--mui-palette-primary-main)'
                  },
                }}
              />
            </Stack>
          </Paper>
        ))}
      </Box>

      <Divider sx={{ mt: 1 }} />
      <Stack direction="row" gap={2} sx={{ mt: 2, justifyContent: { xs: 'center', md: 'flex-end' } }}>
        <Button
          onClick={handleReset}
          sx={{
            fontWeight: 600,
            borderRadius: 1,
            px: 5,
            background: 'var(--mui-palette-secondary-dark)',
            color: 'var(--mui-palette-common-white)',
            '&:hover': { background: 'var(--mui-palette-secondary-main)' },
          }}
          variant="contained"
        >
          Reset
        </Button>
        <LoadingButton
          variant="contained"
          disabled={isDisabled}
          sx={{
            fontWeight: 600,
            borderRadius: 1,
            px: 5,
          }}
        >
          Submit
        </LoadingButton>
      </Stack>
    </Stack>
  );
}
