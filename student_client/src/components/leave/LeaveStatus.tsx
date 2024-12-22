import * as React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { QrCode } from 'react-qrcode-pretty';
import dayjs from 'dayjs';
import { useTheme, type Theme } from '@mui/material/styles';



export default function LeaveStatus({ phase,id }: { phase: number;id:string; }): React.JSX.Element {
  
  const theme: Theme = useTheme();
  
  const islg = useMediaQuery(theme.breakpoints.up('lg'));
  const isxs = useMediaQuery(theme.breakpoints.between('xs','sm'));
  
  const validDate="2022-12-31";




  return (
    <Paper elevation={0} sx={{ p: 3,mt:{xs:2,lg:0}, backgroundColor: 'var(--mui-palette-background-level3)', height: '100%' }}>
      {phase === 2 ? (
        <Stack alignItems="center" justifyContent="center" height={1} >
        <QrCode
          value={id}
          variant={{
            eyes: 'fluid',
            body: 'rounded',
          }}
          canvasProps={{ style: { borderRadius: 4, width:islg?'80%':isxs?'70%':'40%', aspectRatio: '1/1' } }}
          color={{
            eyes: '#7d7d7d',
            body: '#4d4d4d',
          }}
          bgColor="#ffffff"
          bgRounded
          divider
        />

        <Typography variant="h3" textAlign="center" sx={{fontSize:{xs:"26px",sm:"2.25rem"}}} fontWeight={600} mt={3}>
          Gate Pass
        </Typography>
        <Typography variant="body1" textAlign="center" >
          Valid Till : {dayjs(validDate).format('DD/MM/YY')}
        </Typography>



        </Stack>
      ) : (
        <Stack justifyContent="center" height={1} gap={0} textAlign="center" >
          <Typography variant="h3" fontWeight={600} mb={4} >
            Status
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" mb={2} >
            <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
            <Typography variant="h6" fontWeight={500} color="success.main">
              Application Submitted
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" mb="2rem">
            <CancelIcon sx={{ color: 'error.main', mr: 1 }} />
            <Typography variant="h6" fontWeight={500} color="error.main">
              Caretaker Approval
            </Typography>
          </Box>
        </Stack>
      )}
    </Paper>
  );
}
