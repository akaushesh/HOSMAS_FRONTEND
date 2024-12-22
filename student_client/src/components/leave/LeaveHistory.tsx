import * as React from 'react';
import { Box, Divider, Pagination, Typography } from '@mui/material';
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


  const paginatedRecords = leaveRecords.slice(
    (page - 1) * 5,
    page * 5
  );


  return (
    <Box alignItems="center" justifyContent="space-between" display="flex" flexDirection="column" width={1} height={1} >
      <Box width={1}>

      {paginatedRecords.map((record, index) => (
        <Box
          key={`leave-record-${index.toString()}`}
          sx={{
            display: 'flex',
            width: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
            px: 2,
            py:0.7,
            backgroundColor: '#ffffff',
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {record.reason}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {record.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="body1">{dayjs(record.leaveDateFrom).format('DD/MM/YY')}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1">{dayjs(record.leaveDateTo).format('DD/MM/YY')}</Typography>
          </Box>
        </Box>
      ))}
      </Box>


      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>
        <Pagination count={2} onChange={handleChangePage} variant="outlined" color="primary" />
      </Box>
    </Box>
  );
}
