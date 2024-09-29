'use client';

import { initiatePasswordReset, newLogin, resetPassword } from '@/services/auth';
import { getProfile } from '@/services/profile';
import type { AxiosError } from 'axios';

import type { User } from '@/types/user';

import { logger } from '../default-logger';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: '/assets/avatar.png',
  firstName: 'Sofia',
  lastName: 'Rivers',
  email: 'sofia@devias.io',
} satisfies User;

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface CustomErrorResponse {
  detail?: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'discord';
}

export interface SignInWithPasswordParams {
  email: string;
  password: string;
}

export interface InitiateResetPasswordParams {
  email: string;
}

export interface ResetPasswordParams {
  slug: string;
  password: string;
}

class AuthClient {
  async signUp(_: SignUpParams): Promise<{ error?: string }> {
    // Make API request

    // We do not handle the API, so we'll just generate a token and store it in localStorage.
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);

    return {};
  }

  async signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
    const { email, password } = params;
    let token: string | null;

    try {
      const loginResponse = await newLogin({ email, password });
      const successLoginResponse = loginResponse;

      token = successLoginResponse?.data?.access;
      logger.debug('signInWithPassword', successLoginResponse);
    } catch (err) {
      const axiosError = err as AxiosError<CustomErrorResponse>;
      logger.error('signInWithPassword', axiosError);

      if (axiosError?.response?.data?.detail) {
        return { error: axiosError.response.data.detail };
      }
      return { error: 'An error occurred' };
    }

    localStorage.setItem('custom-auth-token', token);
    return {};
  }

  async initiateResetPassword(params: InitiateResetPasswordParams): Promise<{ error?: string }> {
    try {
      await initiatePasswordReset(params);
    } catch (err) {
      const axiosError = err as AxiosError<CustomErrorResponse>;
      logger.error('initiate password reset', axiosError);

      if (axiosError?.response?.data?.detail) {
        return { error: axiosError.response.data.detail };
      }
      return { error: 'An error occurred' };
    }
    return {};
  }

  async resetPassword(params: ResetPasswordParams): Promise<{ error?: string }> {
    try {
      logger.debug('reset password', params);
      await resetPassword(params);
    } catch (err) {
      const axiosError = err as AxiosError<CustomErrorResponse>;
      logger.error('reset password', axiosError);

      if (axiosError?.response?.data?.detail) {
        return { error: axiosError.response.data.detail };
      }
      return { error: 'An error occurred' };
    }
    return {};
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    try {
      await getProfile();
    } catch (err) {
      return { data: null };
    }
    return { data: user };
  }

  async getToken(): Promise<{ data?: string | null }> {
    const token = localStorage.getItem('custom-auth-token');

    return { data: token };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('custom-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
