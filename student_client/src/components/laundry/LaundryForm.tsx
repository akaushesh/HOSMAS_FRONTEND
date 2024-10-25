'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

interface LaundryFormProps {
  toggleForm: boolean;
  setToggleForm: (prev: boolean) => void;
}

export default function LaundryForm({ toggleForm, setToggleForm }: LaundryFormProps): React.JSX.Element {
  const [laundryData, setLaundryData] = React.useState<Record<string, number>>({
    Jeans: 0,
    Pants: 0,
    Pyjama: 0,
    Shorts: 0,
    Shirts: 0,
    'T-Shirts': 0,
    'Kurta/ Salwar': 0,
    Skirt: 0,
    Dupatta: 0,
    'Bed Sheet': 0,
    'Pillow Cover': 0,
    'Towel/H-Towel': 0,
    Turban: 0,
    'Upper Hood': 0,
  });
  const totalClothes = Object.values(laundryData).reduce((total, count) => total + count, 0);

  return (
    <Paper>
      <Dialog
        open={toggleForm}
        onClose={() => {
          setToggleForm(false);
        }}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-paper': {
            width: { xs: '90%', lg: '45%' },
            maxWidth: 'none',
          },
        }}
      >
        <DialogTitle fontSize={28} fontWeight={600}>
          Fill Laundry Form
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            {Object.keys(laundryData).map((item) => {
              // const isEven=index%2===0;

              return (
                <Grid item xs={12} md={6} key={item}>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap={6}
                      sx={{
                        background: 'var(--mui-palette-secondary-light)',
                        border: '1px solid var(--mui-palette-secondary-main)',
                        borderRadius: 1,
                        px: 2,
                        py: 0.5,
                      }}
                    >
                      <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>
                        {item}
                      </Typography>

                      <Stack
                        sx={{ justifySelf: 'flex-end' }}
                        direction="row"
                        justifyContent="flex-right"
                        alignItems="center"
                        gap={1}
                      >
                        <IconButton
                          disabled={laundryData[item] <= 0}
                          onClick={() => {
                            setLaundryData({ ...laundryData, [item]: laundryData[item] - 1 });
                          }}
                          sx={{
                            py: 0.7,
                            color: 'var(--mui-palette-primary-main)',
                            '&:disabled': {
                              color: 'var(--mui-palette-secondary-dark)',
                              // border: '1px solid var(--mui-palette-secondary-main)',
                              opacity: 0.8,
                            },
                          }}
                        >
                          <Typography variant="h6">-</Typography>
                        </IconButton>

                        <Paper
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 0.8,
                            px: 0.8,
                            border: '1px solid var(--mui-palette-secondary-main)',
                            py: 0.15,
                          }}
                        >
                          {laundryData[item]}
                        </Paper>

                        <IconButton
                          disabled={totalClothes >= 10}
                          onClick={() => {
                            setLaundryData({ ...laundryData, [item]: laundryData[item] + 1 });
                          }}
                          sx={{
                            py: 0.7,
                            color: 'var(--mui-palette-primary-main)',
                            '&:disabled': {
                              color: 'var(--mui-palette-secondary-dark)',
                              // border: '1px solid var(--mui-palette-secondary-main)',
                              opacity: 0.8,
                            },
                          }}
                        >
                          <Typography variant="h6">+</Typography>
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Divider />
          <Stack direction="row" justifyContent="flex-end" gap={2} sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                setToggleForm(false);
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
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setToggleForm(false);
              }}
              disabled={totalClothes <= 0}
              sx={{
                fontWeight: 600,
                borderRadius: 1,
                px: 5,
              }}
            >
              Submit
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
