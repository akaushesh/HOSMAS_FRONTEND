'use client';

import * as React from 'react';
import type { ErrorResponse } from '@/services/auth';
import type { GroupResponse } from '@/services/group';
import type { SuccessResponse } from '@/services/invitation';
import type { ProfileResponse } from '@/services/profile';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CircularProgress, IconButton, Menu, MenuItem, TableFooter } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useQueryClient } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useCreateGroup, useTransferOwnership } from '@/hooks/mutation/use-group';
import { useGroup } from '@/hooks/query/use-group';
import { useProfile } from '@/hooks/query/use-profile';
import CustomModal from '@/components/core/custom-modal';

import LeaveConfirmation from './leave-confirmation';

export interface CreatedData {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export default function GroupDetails(): React.JSX.Element {
  const { data: groupDetails, isLoading } = useGroup();
  const group = groupDetails as AxiosResponse<GroupResponse>;
  const leader = group?.data?.leader;
  const members = group?.data?.members;
  logger.debug('useGroup', groupDetails);

  const { data: profile } = useProfile();
  const user = profile as AxiosResponse<ProfileResponse>;
  const isLeader = user?.data?.rollno === leader?.rollno;

  const isIndividual = user?.data?.group?.size === 1;

  const [openLeaveModal, setOpenLeaveModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [newLeaderRollno, setNewLeaderRollno] = React.useState<null | number>(null);
  const [createError, setCreateError] = React.useState<string>('');

  const queryClient = useQueryClient();

  const onSuccess = async (res: AxiosResponse<SuccessResponse>): Promise<void> => {
    logger.debug(res);
    await queryClient.invalidateQueries({ queryKey: ['getGroup'] });
  };

  const onError = (error: AxiosError<ErrorResponse>): void => {
    logger.error(error);
  };

  const { mutate: transferOwnership, isPending: isTransferOwnershipPending } = useTransferOwnership({
    onSuccess,
    onError,
  });

  const { mutate: createGroupFn, isPending: isCreatingGroup } = useCreateGroup({
    onSuccess: async () => {
      setCreateError('');
      await queryClient.invalidateQueries({ queryKey: ['getGroup'] });
      await queryClient.invalidateQueries({ queryKey: ['getMyToken'] });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      setCreateError(error?.response?.data?.message ?? 'Failed to create group');
    },
  });

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    setNewLeaderRollno(Number(event.currentTarget.id));
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onTransferOwnership = (): void => {
    transferOwnership({ rollno: newLeaderRollno });
    logger.debug(newLeaderRollno);
  };

  // ── Empty state: no group yet ──
  if (!isLoading && !leader) {
    return (
      <TableContainer component={Paper}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 2rem',
            gap: 2,
          }}
        >
          <GroupsIcon sx={{ fontSize: '4rem', color: 'text.secondary' }} />
          <Typography variant="h6" color="text.secondary">
            You are not in a group yet
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Create a group to become the leader and start inviting members, or wait for a leader to invite you.
          </Typography>
          {createError && (
            <Typography variant="body2" color="error">
              {createError}
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={() => { createGroupFn(); }}
            disabled={isCreatingGroup}
            startIcon={isCreatingGroup ? <CircularProgress size={16} /> : <GroupsIcon />}
          >
            {isCreatingGroup ? 'Creating…' : 'Create Group'}
          </Button>
        </Box>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="group table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Roll Number</TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                onClick={() => {
                  setOpenLeaveModal(true);
                }}
                disabled={isLoading}
              >
                Leave
              </Button>
            </TableCell>
            <CustomModal
              open={openLeaveModal}
              onClose={() => {
                setOpenLeaveModal(false);
              }}
            >
              <LeaveConfirmation
                onClose={() => {
                  setOpenLeaveModal(false);
                }}
              />
            </CustomModal>
          </TableRow>
        </TableHead>
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
            <TableRow key={leader?.rollno}>
              <TableCell>{leader?.name}</TableCell>
              <TableCell align="center">{leader?.rollno}</TableCell>
              <TableCell align="right">LEADER</TableCell>
            </TableRow>
            {members?.map((member) => (
              <TableRow key={member?.rollno}>
                <TableCell>{member?.name}</TableCell>
                <TableCell align="center">{member?.rollno}</TableCell>
                {isLeader ? (
                  <TableCell align="right">
                    <IconButton
                      id={member.rollno.toString()}
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
                      {isTransferOwnershipPending ? (
                        <div style={{ padding: '1rem 1.2rem' }}>
                          <CircularProgress />
                        </div>
                      ) : (
                        <div>
                          <MenuItem onClick={onTransferOwnership}>Transfer Ownership</MenuItem>
                        </div>
                      )}
                    </Menu>
                  </TableCell>
                ) : (
                  <TableCell align="right">&nbsp;</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        )}

        <TableFooter>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell align="center">Group can contain upto {user?.data?.group_size_limit} members</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
