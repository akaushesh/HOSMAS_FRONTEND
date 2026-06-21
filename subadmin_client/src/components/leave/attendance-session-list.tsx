'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Stack,
  CircularProgress,
} from '@mui/material';
import dayjs from 'dayjs';
import { type AttendanceSession } from '@/types/attendance';

interface AttendanceSessionListProps {
  sessions: AttendanceSession[];
  isLoading: boolean;
  onSelectSession: (session: AttendanceSession) => void;
  selectedSessionId: number | null;
}

export default function AttendanceSessionList({
  sessions,
  isLoading,
  onSelectSession,
  selectedSessionId,
}: AttendanceSessionListProps): React.JSX.Element {
  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" py={4}>
        <CircularProgress size={24} />
      </Stack>
    );
  }

  if (sessions.length === 0) {
    return (
      <Stack py={3} alignItems="center">
        <Typography variant="body2" color="text.secondary">
          No past sessions found.
        </Typography>
      </Stack>
    );
  }

  return (
    <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 300, overflowY: 'auto' }}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Hostel</TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map((session) => {
            const isSelected = session.id === selectedSessionId;
            return (
              <TableRow
                key={session.id}
                hover
                selected={isSelected}
                sx={{
                  backgroundColor: isSelected ? 'var(--mui-palette-action-selected)' : 'inherit',
                }}
              >
                <TableCell>{dayjs(session.date).format('DD MMM YYYY')}</TableCell>
                <TableCell>{session.hostel}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant={isSelected ? 'contained' : 'outlined'}
                    onClick={() => {
                      onSelectSession(session);
                    }}
                  >
                    {isSelected ? 'Viewing' : 'View'}
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
