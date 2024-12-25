import * as React from 'react';
import { Box, Divider, Pagination, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

export interface LeaveRecordProps {
  leaveRecords: LeaveRecord[];
}

interface LeaveRecord {
  reason: string;
  location: string;
  leaveDateFrom: string;
  leaveDateTo: string;
}

export default function LeaveHistory({ leaveRecords }: LeaveRecordProps): React.JSX.Element {
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };

  const paginatedRecords = leaveRecords.slice((page - 1) * 5, page * 5);

  return (
    <Stack justifyContent="space-between" alignItems="center" height={1} width={1}>
      <Paper
        elevation={0}
        sx={{ p: {xs:2,sm:3,md:2,lg:3}, backgroundColor: 'var(--mui-palette-background-level3)', minHeight: '53vh', width: '100%' }}
      >
        <Box
          alignItems="center"
          justifyContent="space-between"
          display="flex"
          flexDirection="column"
          width={1}
          height={1}
        >
          <Box width={1}>
            {paginatedRecords.map((record, index) => (
              <Box
                key={`leave-record-${index.toString()}`}
                sx={{
                  display: 'flex',
                  width: 1,
                  flexDirection: { xs: 'column',sm:'row',md:'column' ,lg: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: {xs:3,sm:2,md:3,lg:2},
                  px: {xs:1,sm:2,md:1,lg:2},
                  py: {xs:1.6,sm:0.7,md:1.6,lg:0.7},
                  gap: 2,
                  backgroundColor: '#ffffff',
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <Box textAlign={{ xs: 'center', sm: 'left',md: 'center', lg: 'left' }}>
                  <Typography variant="body1" lineHeight={1} sx={{ fontWeight: 500 }}>
                    {record.reason}
                  </Typography>
                  <Typography variant="body2" mt="4px" lineHeight={1} color="text.secondary">
                    {record.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:{xs:"center",sm:"stretch",md:"center",lg:"stretch"},width:{xs:1,sm:'auto',md:1,lg:'auto'}, gap: 1 }}>
                  <Typography variant="body1" fontSize={{ xs: '13px', lg: '14px' }}>
                    {dayjs(record.leaveDateFrom).format('DD MMM YY')}
                  </Typography>
                <Divider sx={{borderColor:"var(--mui-palette-primary-main)",display:{xs:"none",sm:"block",md:"none",lg:"block"}}} orientation="vertical" flexItem />

                  <Box position="relative" display={{xs:"block",sm:"none",md:"block",lg:"none"}} width="15%" height="2px">
                    <Box
                      sx={{
                        width:'80%',
                        ml: "10%",
                        height: '2px',
                        backgroundColor: 'var(--mui-palette-primary-main)',
                        position: 'absolute',
                        top: '50%',
                      }}
                    />
                  </Box>
                  <Typography variant="body1" fontSize={{ xs: '13px', lg: '14px' }}>
                    {dayjs(record.leaveDateTo).format('DD MMM YY')}
                  </Typography>
                </Box>

                {/* <Box sx={{ display: 'flex',flexDirection:{xs:"column",lg:"row"}, alignItems: 'center', gap: {xs:0,lg:1.5} }}>
                <Typography variant="body1" fontSize={{xs:"13px",lg:"16px"}}>{dayjs(record.leaveDateFrom).format('DD MMM YY')}</Typography>
                <Divider sx={{display:{xs:"none",lg:"block"}}} orientation="vertical" flexItem />
                <Typography variant="body1" fontSize={{xs:"13px",lg:"16px"}}>{dayjs(record.leaveDateTo).format('DD MMM YY')}</Typography>
              </Box> */}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>
        <Pagination count={2} onChange={handleChangePage} variant="outlined" color="primary" />
      </Box>
    </Stack>
  );
}
