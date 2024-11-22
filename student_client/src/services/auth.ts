import type { AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';

import { authApi, centralApi } from './api';
import type { OkResponse } from './profile';

export interface LoginData {
  email: string;
  password: string;
}

export interface TokenResponse {
  refresh: string;
  access: string;
}

export interface ErrorResponse {
  detail: string;
}

export interface InitiatePasswordResetData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
}

export const login = async (data: LoginData): Promise<AxiosResponse<TokenResponse>> => {
  const res = await authApi.post('auth/token/', data);
  logger.debug('login', res.data);
  return res;
};

export const newLogin = async (data: LoginData): Promise<AxiosResponse<TokenResponse>> => {
  const res = await centralApi.post('/token/', data);
  logger.debug('new login', res.data);
  return res;
};

export const initiatePasswordReset = async (data: InitiatePasswordResetData): Promise<AxiosResponse<OkResponse>> => {
  const res = await centralApi.post('user/initiate-reset-password/', data);
  logger.debug('initiate password reset', res.data);
  return res;
};

export const resetPassword = async (data: ResetPasswordData): Promise<AxiosResponse<OkResponse>> => {
  const res = await centralApi.post('user/reset-password/', data);
  logger.debug('initiate password reset', res.data);
  return res;
};
