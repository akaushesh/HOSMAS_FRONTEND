import type { AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';

import { authApi } from './api';
import type { OkResponse } from './profile';

interface LoginData {
  email: string;
  password: string;
}

export interface TokenResponse {
  refresh: string;
  access: string;
}

export interface ErrorResponse {
  detail?: string;
  details?: string;
}

interface InitiatePasswordResetData {
  email: string;
}

interface ResetPasswordData {
  slug: string;
  password: string;
}

export type LoginResponse = TokenResponse | ErrorResponse;

export const login = async (data: LoginData): Promise<AxiosResponse<LoginResponse>> => {
  const res = await authApi.post('token/', data);
  logger.debug('login', res.data);
  return res;
};

// below functions not there yet

export const initiatePasswordReset = async (data: InitiatePasswordResetData): Promise<AxiosResponse<OkResponse>> => {
  const res = await authApi.post('user/initiate-reset-password/', data);
  logger.debug('initiate password reset', res.data);
  return res;
};

export const resetPassword = async (data: ResetPasswordData): Promise<AxiosResponse<OkResponse>> => {
  const res = await authApi.post('user/reset-password/', data);
  logger.debug('initiate password reset', res.data);
  return res;
};
