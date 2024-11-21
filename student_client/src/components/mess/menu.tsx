'use client';

import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

export const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

type Items = Record<string, 'veg' | 'non-veg'>;

type MealTimings = Record<string, Items>;

export interface MenuItems {
  Breakfast: MealTimings;
  Lunch: MealTimings;
  Dinner: MealTimings;
}

interface MenuProps {
  timing: 'Breakfast' | 'Lunch' | 'Dinner';
  day: string;
  menuItems: MenuItems;
}

export default function MenuTable({ timing, day, menuItems }: MenuProps): React.JSX.Element {
  const minItemColumns = 6;

  const mealTimings = menuItems[timing];

  const maxItems = mealTimings ? Math.max(...days.map((val) => Object.keys(mealTimings[val] || {}).length || 0)) : 0;

  const itemColumns = Math.max(minItemColumns, maxItems);

  return (
    <Box>
      <Stack sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ height: '42vh', overflowY: 'auto', pb: 1 }}>
          {Object.keys(mealTimings[day] || {}).map((item) => {
            const type = mealTimings[day][item];
            return (
              <Paper
                key={`${timing}-${item}`}
                sx={{
                  px: 2,
                  py: 1.5,
                  mx: 1,
                  my: 1,
                  background: 'var(--mui-palette-secondary-light)',
                  border: '1px dashed var(--mui-palette-secondary-main)',
                }}
                elevation={10}
              >
                <Stack
                  sx={{ ml: { xs: 0, md: 2 }, gap: { xs: 3, md: 6 } }}
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Stack
                    sx={{
                      p: 0,
                      border: type === 'veg' ? '4px solid green' : '4px solid #8C0606',
                      borderRadius: 0.4,
                      borderWidth: { xs: '3px', md: '4px' },
                    }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: { xs: '15px', md: '20px' }, color: type === 'veg' ? 'green' : '#8C0606' }}
                    />
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: { xs: '16px', md: '19px' } }}>
                    {item}
                  </Typography>
                </Stack>
              </Paper>
            );
          })}
        </Box>
      </Stack>

      <TableContainer
        component={Paper}
        sx={{
          mt: 5,
          overflowX: 'auto',
          border: '2px solid var(--mui-palette-secondary-dark)',
          borderRadius: 1,
          borderTopWidth: '1px',
          mb: { xs: 3, md: 0 },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Table>
          <TableBody>
            {days.map((val) => (
              <TableRow key={val}>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    minWidth: { xs: 130, md: 200 },
                    px: { xs: 1, md: 2 },
                    py: { xs: 3, md: 2.4 },
                    border: '2px solid var(--mui-palette-secondary-dark)',
                    borderTopWidth: '1px',
                    borderLeftWidth: '0px',
                  }}
                  align="center"
                >
                  {val.toUpperCase()}
                </TableCell>

                {/* Render the items for the day */}
                {Object.entries(mealTimings[val] || {}).map(([item, type], index) => (
                  <TableCell
                    key={`${timing}-${val}-${item}-${String(index)}`}
                    sx={{
                      border: '1px solid var(--mui-palette-secondary-main)',
                      textAlign: 'center',
                      minWidth: { xs: 110, md: 150 },
                      px: { xs: 1, md: 2 },
                    }}
                    align="center"
                  >
                    <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
                      <Stack
                        sx={{
                          p: 0,
                          border: type === 'veg' ? '2px solid green' : '2px solid #8C0606',
                          borderRadius: 0.4,
                          borderWidth: '2px',
                        }}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FiberManualRecordIcon sx={{ fontSize: '13px', color: type === 'veg' ? 'green' : '#8C0606' }} />
                      </Stack>

                      <Stack
                        sx={{
                          flexGrow: 1, 
                          textAlign: 'center',
                        }}
                        alignItems="center"
                        justifyContent="center"
                      >
                        {item}
                      </Stack>
                    </Stack>
                  </TableCell>
                ))}

                {/* Fill in remaining columns if there are fewer items than the max */}
                {Array.from({ length: itemColumns - Object.keys(mealTimings[val] || {}).length }).map((_, index) => (
                  <TableCell
                    key={`empty-${timing}-${val}-${String(index)}`}
                    sx={{
                      border: '1px solid var(--mui-palette-secondary-main)',
                      minWidth: { xs: 110, md: 150 },
                    }}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
