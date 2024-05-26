'use client';

import * as React from 'react';
import type { GroupResponse } from '@/services/group';
import { Button, CircularProgress, TableFooter } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useGroup } from '@/hooks/query/use-group';
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
  const { data, isLoading } = useGroup();
  const group = data as AxiosResponse<GroupResponse>;
  const leader = group?.data?.leader;
  const members = group?.data?.members;
  logger.debug('useGroup', data);

  const [openLeaveModal, setOpenLeaveModal] = React.useState(false);

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
                <TableCell align="right">&nbsp;</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
        <TableFooter>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell align="center">Group can contain upto 8 members</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
