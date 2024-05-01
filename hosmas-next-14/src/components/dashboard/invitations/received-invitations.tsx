'use client';

import * as React from 'react';
import { Card } from '@mui/material';

import { logger } from '@/lib/default-logger';
import { useReceivedInvitationStatus } from '@/hooks/query/use-invitation';

export function ReceivedInvitations(): React.JSX.Element {
  const { data } = useReceivedInvitationStatus();
  logger.debug('received invitations', data);

  return <Card />;
}
