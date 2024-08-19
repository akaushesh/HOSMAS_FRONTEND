'use client';

import * as React from 'react';
import type { ErrorResponse } from '@/services/auth';
import type { ReceivedInvitationResponse } from '@/services/invitation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { logger } from '@/lib/default-logger';
import { useAcceptInvitation, useDeleteInvitation } from '@/hooks/mutation/use-invitation';
import { useReceivedInvitationStatus } from '@/hooks/query/use-invitation';

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

export function ReceivedInvitations(): React.JSX.Element {
  const { data: invitations, isLoading, isError, error: getInvitationsError } = useReceivedInvitationStatus();
  const receivedInvitations = invitations as ReceivedInvitationResponse;
  const receivedInvitationError = getInvitationsError as AxiosError<ErrorResponse>;
  logger.debug('received invitations', receivedInvitations);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedInvitationId, setSelectedInvitationId] = React.useState<number | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setSelectedInvitationId(Number(event.currentTarget.id));
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const queryClient = useQueryClient();

  const onSuccess = async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['getReceivedInvitations'] });
    await queryClient.invalidateQueries({ queryKey: ['getGroup'] });
    handleClose();
  };

  const onError = (error: AxiosError<ErrorResponse>): void => {
    logger.error('invitation', error);
  };

  const { mutate: acceptInvite, isPending: isAcceptInvitePending } = useAcceptInvitation({ onSuccess, onError });
  const { mutate: deleteInvite, isPending: isDeleteInvitePending } = useDeleteInvitation({ onSuccess, onError });

  const onAcceptInvite = (): void => {
    if (selectedInvitationId) {
      acceptInvite({ id: selectedInvitationId });
    }
  };

  const onRejectInvite = (): void => {
    if (selectedInvitationId) {
      deleteInvite({ id: selectedInvitationId });
    }
  };

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
        ) : isError ? (
          <TableBody>
            <TableRow key="loading">
              <TableCell>&nbsp;</TableCell>
              <TableCell align="center">
                <Typography variant="body2">
                  {receivedInvitationError?.response?.data?.detail
                    ? receivedInvitationError?.response?.data?.detail
                    : 'Something went wrong'}
                </Typography>
              </TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {receivedInvitations?.data.length === 0 && (
              <TableRow>
                <TableCell align="center">No invitations received yet!</TableCell>
              </TableRow>
            )}
            {receivedInvitations?.data.map((invitation) => {
              if (invitation?.status === 'W') {
                return (
                  <TableRow hover key={invitation.group_leader_rollno}>
                    <TableCell>{invitation.group_leader_name}</TableCell>
                    <TableCell align="center">{timeAgo(new Date(invitation.time))}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        id={invitation.id.toString()}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {isAcceptInvitePending || isDeleteInvitePending ? (
                          <div style={{ padding: '1rem 1.2rem' }}>
                            <CircularProgress />
                          </div>
                        ) : (
                          <div>
                            <MenuItem onClick={onAcceptInvite}>Accept</MenuItem>
                            <MenuItem onClick={onRejectInvite}>Reject</MenuItem>
                          </div>
                        )}
                      </Menu>
                    </TableCell>
                  </TableRow>
                );
              } else {
                return null;
              }
            })}
          </TableBody>
        )}
      </Table>
    </Box>
  );
}
