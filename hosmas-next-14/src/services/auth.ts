import type { AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';

import { authApi } from './api';

interface LoginData {
  email: string;
  password: string;
}

export interface TokenResponse {
  refresh: string;
  access: string;
}

interface ErrorResponse {
  details: string;
}

type LoginResponse = TokenResponse | ErrorResponse;

export const login = async (values: LoginData): Promise<AxiosResponse<LoginResponse>> => {
  const data = {
    email: values.email,
    password: values.password,
  };

  const res = await authApi.post('auth/token/', data);
  logger.debug('login', res.data);
  return res;
};
