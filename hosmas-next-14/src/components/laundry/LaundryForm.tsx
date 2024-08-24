'use client';

import * as React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

interface LaundryFormProps{
    laundryData:Record<string, number>;
    setLaundryData:(prev:Record<string, number>)=>void;
    toggleForm:boolean;
    setToggleForm:(prev:boolean)=>void;
}

export default function LaundryForm({toggleForm,setToggleForm,laundryData, setLaundryData}:LaundryFormProps): React.JSX.Element {

    const totalClothes = Object.values(laundryData).reduce((total, count) => total + count, 0);


  return (
    <Paper>
      <Dialog
        open={toggleForm}
        onClose={() => {
          setToggleForm(false);
        }}
        fullWidth
      >
        <DialogTitle fontSize={28} fontWeight={600}>
          Fill Laundry Form
        </DialogTitle>
        <DialogContent >
          {Object.keys(laundryData).map((item) => {
            
            // const isEven=index%2===0;

            return(
            <Box key={item} 
              // sx={{background:isEven?"var(--mui-palette-secondary-light)":""}}
            >
              <Divider />

              <Stack direction="row" justifyContent="space-between" alignItems="center" gap={6} sx={{ my: 0.37 }}>
                <Typography variant="h6">{item}</Typography>

                <Stack direction="row" justifyContent="flex-right" alignItems="center" gap={2}>
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
                  <ButtonGroup size="small">
                    <Button
                      disabled={totalClothes >= 10}
                      onClick={() => {
                        setLaundryData({ ...laundryData, [item]: laundryData[item] + 1 });
                      }}
                      sx={{
                        py:0.7,
                        '&:disabled': {
                          color: 'var(--mui-palette-secondary-dark)',
                          border: '1px solid var(--mui-palette-secondary-main)',
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Typography variant="h6">+</Typography>
                    </Button>
                    <Button
                      disabled={laundryData[item] <= 0}
                      onClick={() => {
                        setLaundryData({ ...laundryData, [item]: laundryData[item] - 1 });
                      }}
                      sx={{
                        py:0.7,
                        '&:disabled': {
                          color: 'var(--mui-palette-secondary-dark)',
                          border: '1px solid var(--mui-palette-secondary-main)',
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Typography variant="h6">-</Typography>
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
            </Box>
          )})}
          <Divider />
          <Stack direction="row" justifyContent="flex-end" gap={2} sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                setToggleForm(false);
              }}
              sx={{
                fontWeight: 600,
                borderRadius: 1,
                px:5,
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
                px:5,
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
