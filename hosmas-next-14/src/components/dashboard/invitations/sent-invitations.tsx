'use client';

import * as React from 'react';
import { Card } from '@mui/material';

import { logger } from '@/lib/default-logger';
import { useSentInvitationStatus } from '@/hooks/query/use-invitation';

export function SentInvitations(): React.JSX.Element {
  const { data } = useSentInvitationStatus();
  logger.debug('sent invitations', data);

  return <Card />;
}
