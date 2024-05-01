'use client';

import * as React from 'react';
import { Card } from '@mui/material';

import { logger } from '@/lib/default-logger';
import { useGroup } from '@/hooks/query/use-group';

export function GroupDetails(): React.JSX.Element {
  const { data } = useGroup();
  logger.debug('useGroup', data);

  return <Card />;
}
