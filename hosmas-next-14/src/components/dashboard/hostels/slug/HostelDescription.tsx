import React, { useState } from 'react';
import { Box, Collapse, Divider, Link, Paper, Typography } from '@mui/material';

import type { hostel } from '@/types/hostels';

interface PropsType {
  hostel?: hostel | null;
}

export default function HostelDescription({ hostel }: PropsType): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 1,
        gap: 4,
        px: 3,
        py: 1,
        borderRadius: 1,
        mb: 2,
      }}
      elevation={3}
    >
      <Box mb={0.5}>
        <Typography variant="h2">{hostel?.name}</Typography>

        <Collapse in={open} collapsedSize={60}>
          {hostel?.description.split('<br/>').map((desc, _) => {
            return (
              <Typography key={hostel?.emailW} variant="subtitle2">
                {desc}
              </Typography>
            );
          })}
        </Collapse>

        <Typography
          sx={{ cursor: 'pointer' }}
          variant="body2"
          mt={1}
          color="var(--mui-palette-text-secondaryChannel)"
          onClick={() => {
            setOpen(!open);
          }}
        >
          ...view {open ? 'less' : 'more'}
        </Typography>
      </Box>

      <Divider orientation="vertical" variant="middle" flexItem />

      <Box>
        <Box>
          <Typography variant="h5" fontSize="17px">
            {hostel?.warden}
          </Typography>
          <Typography variant="body2">Warden</Typography>

          <Typography textAlign="center" mb={2} variant="h6" fontSize="17px">
            <Link color="inherit" href={`mailto:${hostel?.emailW ?? ''}`} target="_blank">
              {hostel?.emailW ?? ''}
            </Link>
          </Typography>
        </Box>
        {open ? (
          <>
            <Typography textAlign="center" mb={2} variant="h6" fontSize="17px">
              <Link color="inherit" href={`mailto:${hostel?.emailC ?? ''}`} target="_blank">
                {hostel?.emailC ?? ''}
              </Link>
            </Typography>

            {hostel?.contact.split(',').map((contact, _) => {
              return contact.trim() !== '' ? (
                <Typography key={hostel.emailW} textAlign="center" mb={2} variant="h6" fontSize="17px">
                  {`+91 ${contact.trim()}`}
                </Typography>
              ) : (
                ''
              );
            })}
          </>
        ) : null}
      </Box>
    </Paper>
  );
}
