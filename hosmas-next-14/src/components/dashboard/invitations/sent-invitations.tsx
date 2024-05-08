'use client';

import * as React from 'react';
import type { InvitationStatusResponse } from '@/services/invitation';
import { Chip, CircularProgress, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';

import { logger } from '@/lib/default-logger';
import { useSentInvitationStatus } from '@/hooks/query/use-invitation';

function timeAgo(timestamp: Date): string {
  const currentDate = new Date();
  const pastDate = new Date(timestamp);

  const timeDifference = currentDate.getTime() - pastDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds.toString()} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes.toString()} minutes ago`;
  } else if (hours < 24) {
    return `${hours.toString()} hours ago`;
  }
  return `${days.toString()} days ago`;
}

export function SentInvitations(): React.JSX.Element {
  const { data: invitations, isLoading } = useSentInvitationStatus();
  const sentInvitations = invitations as InvitationStatusResponse;
  logger.debug('sent invitations', sentInvitations);

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Table>
        {isLoading ? (
          <TableBody>
            <TableRow key="loading">
              <TableCell>&nbsp;</TableCell>
              <TableCell align="center">
                <CircularProgress />
              </TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {sentInvitations?.data.map((invitation) => {
              return (
                <TableRow hover key={invitation.invitee_rollno}>
                  <TableCell>{invitation.invitee_name}</TableCell>
                  <TableCell align="center">{timeAgo(new Date(invitation.time))}</TableCell>
                  <TableCell align="right">
                    <Chip color="warning" label="Pending" size="small" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </Box>
  );
}
