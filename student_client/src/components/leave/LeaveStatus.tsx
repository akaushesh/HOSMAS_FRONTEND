import * as React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Paper, Typography } from '@mui/material';
import QRCode from 'react-qr-code';

export default function LeaveStatus({ phase }: { phase: number }): React.JSX.Element {
  return (
    <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f9f9f9', height: '100%' }}>
      {phase === 2 ? (
        <QRCode style={{ aspectRatio: '1/1' }} size={256} value="https://monkeytype.com/" />
      ) : (
        <Box textAlign="center">
          <Typography variant="h2" fontWeight="bold" mb="3rem">
            Status
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" mb="1rem">
            <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="success.main">
              Form Submitted
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" mb="2rem">
            <CancelIcon sx={{ color: 'error.main', mr: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="error.main">
              Caretaker Approval
            </Typography>
          </Box>
        </Box>
      )}
    </Paper>
  );
}
