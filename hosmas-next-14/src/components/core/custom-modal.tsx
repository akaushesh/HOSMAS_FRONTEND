import * as React from 'react';
import { Box, Modal } from '@mui/material';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomModal({ open, onClose, children }: CustomModalProps): React.JSX.Element {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'min(90%, 25rem)',
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 2,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style }}>{children}</Box>
    </Modal>
  );
}
