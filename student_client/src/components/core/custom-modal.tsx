import * as React from 'react';
import { Box, Modal } from '@mui/material';

import { logger } from '@/lib/default-logger';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

export default function CustomModal({ open, onClose, children, width }: CustomModalProps): React.JSX.Element {
  const containerWidth = width ? width : 'min(90%, 25rem)';
  logger.debug('containerWidth', containerWidth);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: containerWidth,
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
