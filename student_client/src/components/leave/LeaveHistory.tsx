import * as React from 'react';
import { Box, Typography } from '@mui/material';

export interface LeaveRecordProps {
  leaveRecords: LeaveRecord[];
}

interface LeaveRecord {
  title: string;
  location: string;
  from: string;
  to: string;
}

export default function LeaveHistory({ leaveRecords }: LeaveRecordProps): React.JSX.Element {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Leave Record
      </Typography>
      <Box>
        {leaveRecords.map((record, index) => (
          <Box
            key={`leave-record-${index.toString()}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
              padding: 2,
              backgroundColor: '#ffffff',
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {record.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {record.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body1">{record.from}</Typography>
              <Typography variant="body1">{record.to}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
