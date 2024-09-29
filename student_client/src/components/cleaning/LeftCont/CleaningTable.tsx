'use client';

import * as React from 'react';
import { type CleaningRequest } from '@/services/cleaning';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import dayjs from 'dayjs';

import { useCleaningRequests } from '@/hooks/query/use-cleaning';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e9e9e9',
    color: '#595959',
    fontWeight: 600,
  },
}));

export default function CleaningTable(): React.JSX.Element {
  const { data: cleaningData, isLoading } = useCleaningRequests({ page: 1, page_size: 10 });
  const cleaningRequests = cleaningData!;
  const assignedCleaningRequests = cleaningRequests?.data?.results.filter(
    (cleaningRequest) => cleaningRequest.status !== 'Pending'
  );

  return (
    <Paper sx={{ borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden', maxHeight: '47vh' }} elevation={10}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ borderRadius: '8px', backgroundColor: 'red' }}>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Janitor</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} sx={{ textAlign: 'center', py: 3 }}>
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            assignedCleaningRequests?.map((task) => <RowCleaning key={task?.id} task={task} />)
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

function RowCleaning({ task }: { task: CleaningRequest }): React.JSX.Element {
  return (
    <TableRow
      sx={{
        cursor: 'pointer',
        transition: 'background-color 200ms ease-in-out',
        '&:hover': {
          backgroundColor: 'var(--mui-palette-action-hover)',
        },
      }}
    >
      <TableCell align="center">{dayjs(task.date).format('DD MMM YYYY')}</TableCell>
      <TableCell align="center">{dayjs(task.date).format('hh:mm A')}</TableCell>
      <TableCell align="center">{task.worker_details.name}</TableCell>
      <TableCell align="center">{task.status}</TableCell>
    </TableRow>
  );
}
