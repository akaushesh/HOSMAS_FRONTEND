'use client';

import * as React from 'react';
import { Box,Button,Checkbox, Divider, Paper, Stack, Typography } from '@mui/material';
import { tempCleaners } from '../TempDataRequests';

export default function Attendance(): React.JSX.Element {
 

  const [cleaners, setCleaners] = React.useState(tempCleaners);

  const totalCleaners = 10;
  const present = 8;

  return (
    <Paper elevation={10} sx={{ p: 3, mt: 3 }}>
      <Stack direction="row" spacing={4}>
        <Typography variant="body1">
          Total Cleaners:
          <span style={{ fontWeight: '600', fontSize: '22px' }}>{totalCleaners}</span>
        </Typography>
        <Typography variant="body1">
          Present:
          <span style={{ fontWeight: '600', fontSize: '22px' }}>{present}</span>
        </Typography>
        <Typography variant="body1">
          Absent:
          <span style={{ fontWeight: '600', fontSize: '22px' }}>{totalCleaners - present}</span>
        </Typography>
      </Stack>

      <Box mt={3} sx={{ overflowY: 'auto', height: '45vh', width: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-evenly' }}>
          {cleaners.map((el) => {
            return (
              <Box
                key={el.id}
                sx={{
                  width: '13%',
                  p: 1,
                  height: '20vh',
                  background: `url(${el.img})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0 0',
                  position: 'relative',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: el.present ? '0px 0px 7px 7px rgba(0,0,0,0.25)':'',
                  transform: el.present ? 'scale(0.9)' : 'scale(1)', 
                }}
                onClick={() => {
                    setCleaners([...cleaners.map((cleaner) => {
                        if (cleaner.id === el.id) {
                            cleaner.present = !cleaner.present;
                        }
                        return cleaner;
                    })])
                }}
              >

                    <Checkbox
                      sx={{background:"white",borderRadius:0.6,p:0,touchAction:"none",pointerEvents:"none"}}
                      checked={el.present}
                      />

                <Typography sx={{ bottom: 9, right: 15, position: 'absolute',background:"white",px:1,py:0.2,borderRadius:1 }} color="var(--TextMain-Color)" variant="h6">
                  {el.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Divider sx={{my:2}} />
      <Stack direction='row' justifyContent="flex-end" mt={2} width={1}>
          <Button variant="contained" sx={{px:6}} color="primary">Save</Button>
      </Stack>
    </Paper>
  );
}
