'use client';

import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Divider, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Stack } from '@mui/system';

import CustomModal from '@/components/core/custom-modal';

import InviteMember from '../invitations/invite-member';
import { ReceivedInvitations } from '../invitations/received-invitations';
import { SentInvitations } from '../invitations/sent-invitations';

export default function InvitationDetails(): React.JSX.Element {
  const [value, setValue] = React.useState('1');
  const [openInvitationModal, setOpenInvitationModal] = React.useState(false);

  const handleOpenInvitationModal = (): void => {
    setOpenInvitationModal(true);
  };

  const handleCloseInvitationModal = (): void => {
    setOpenInvitationModal(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: '100%', typography: 'body1' }}>
      <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{ padding: '1rem' }}>
        <Typography variant="h5">Invitations</Typography>
        <Button
          variant="contained"
          sx={{
            padding: '0.4rem',
            minHeight: 0,
            minWidth: 0,
          }}
          onClick={handleOpenInvitationModal}
        >
          <CustomModal open={openInvitationModal} onClose={handleCloseInvitationModal}>
            <InviteMember onClose={handleCloseInvitationModal} />
          </CustomModal>
          <AddIcon />
        </Button>
      </Stack>

      <Divider />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, paddingLeft: 2, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="sent received tab">
            <Tab label="Received" value="1" />
            <Tab label="Sent" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ReceivedInvitations />
        </TabPanel>
        <TabPanel value="2">
          <SentInvitations />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
