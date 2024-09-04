import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { dashboardApi } from './api';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export type FAQResponse = FAQ[];

export const getFAQ = async (): Promise<AxiosResponse<FAQResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await dashboardApi.get('getFAQ/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getFAQ', res.data);
  return res;
};
