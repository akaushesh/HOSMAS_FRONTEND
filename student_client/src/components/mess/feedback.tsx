'use client';

import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';

interface FeedbackProps {
  timing: string;
}

interface MenuItemProps {
  type: 'veg' | 'non-veg';
  response: boolean | null;
}

export default function Feedback({ timing }: FeedbackProps): React.JSX.Element {
  const [menuItems, setMenuItems] = React.useState<Record<string, MenuItemProps>>({
    'Rajma Rice': { type: 'veg', response: null },
    'Lime water': { type: 'veg', response: null },
    'Green Salad': { type: 'veg', response: null },
    'Boiled Eggs': { type: 'non-veg', response: null },
    'Boiled ': { type: 'non-veg', response: null },
    BoilEggs: { type: 'non-veg', response: null },
    Boilegs: { type: 'non-veg', response: null },
  });

  const handleFeedback = (item: string, response: boolean): void => {
    setMenuItems((prevMenuItems) => ({
      ...prevMenuItems,
      [item]: { ...prevMenuItems[item], response },
    }));
  };

  const handleReset = (): void => {
    setMenuItems((prevMenuItems) =>
      Object.fromEntries(Object.entries(prevMenuItems).map(([key, value]) => [key, { ...value, response: null }]))
    );
  };

  const isDisabled = Object.values(menuItems).every((item) => item.response === null);

  return (
    <Stack>
      <Box sx={{ height: '43vh', overflowY: 'auto', pb: 1.5 }}>
        {Object.keys(menuItems).map((item) => {
          return (
            <Paper
              key={item}
              sx={{
                px: 2,
                py: 0.4,
                mx: 2,
                my: 1,
                background: 'var(--mui-palette-secondary-light)',
                border: '1px dashed var(--mui-palette-secondary-main)',
              }}
              elevation={10}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack sx={{ ml: 2 }} direction="row" alignItems="center" justifyContent="flex-start" spacing={6}>

				  <Stack
                    sx={{ p: 0, border: menuItems[item].type === 'veg' ? '4px solid green' : '4px solid #8C0606',borderRadius:0.4 }}
                    alignItems="center"
                    justifyContent="center"
					>
                    <FiberManualRecordIcon sx={{ color: menuItems[item].type === 'veg' ? 'green' : '#8C0606' }} />
                  </Stack>

                  <Typography variant="h6">{item}</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2}>
                  <IconButton
                    onClick={() => {
                      handleFeedback(item, true);
                    }}
                    size="medium"
                  >
                    <ThumbUpIcon sx={{ color: menuItems[item].response === true ? 'green' : '', fontSize: '27px' }} />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      handleFeedback(item, false);
                    }}
                    size="medium"
                  >
                    <ThumbDownIcon
                      fontSize="inherit"
                      sx={{ color: menuItems[item].response === false ? 'red' : '', fontSize: '27px' }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
            </Paper>
          );
        })}
      </Box>
      <Divider sx={{mt:1}} />
      <Stack direction="row" justifyContent="flex-end" gap={2} sx={{ mt: 2 }}>
        <Button
          onClick={() => {
            handleReset();
          }}
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
          //   onClick={() => {
          //     handleSubmit();
          //   }}
          //   loading={isDisabled}
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
