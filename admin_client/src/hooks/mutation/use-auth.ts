import { initiatePasswordReset, login, resetPassword } from '@/services/auth';
import type {
  ErrorResponse,
  InitiatePasswordResetData,
  LoginData,
  ResetPasswordData,
  TokenResponse,
} from '@/services/auth';
import { changePassword, type OkResponse, type ChangePasswordData } from '@/services/profile';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation } from './use-custom-mutation';
import type { ResolutionFunctions } from './use-custom-mutation';

export const useLogin = ({
  onSuccess,
  onError,
}: ResolutionFunctions<TokenResponse>): UseMutationResult<
  AxiosResponse<TokenResponse>,
  AxiosError<ErrorResponse>,
  LoginData
> => {
  return useCustomMutation<LoginData, TokenResponse>({
    mutationFn: login,
    onSuccess,
    onError,
  });
};

export const useInitiatePasswordReset = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<
  AxiosResponse<OkResponse>,
  AxiosError<ErrorResponse>,
  InitiatePasswordResetData
> => {
  return useCustomMutation<InitiatePasswordResetData, OkResponse>({
    mutationFn: initiatePasswordReset,
    onSuccess,
    onError,
  });
};

export const useResetPassword = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<
  AxiosResponse<OkResponse>,
  AxiosError<ErrorResponse>,
  ResetPasswordData
> => {
  return useCustomMutation<ResetPasswordData, OkResponse>({
    mutationFn: resetPassword,
    onSuccess,
    onError,
  });
};
export const useChangePassword = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<
  AxiosResponse<OkResponse>,
  AxiosError<ErrorResponse>,
  ChangePasswordData
> => {
  return useCustomMutation<ChangePasswordData, OkResponse>({ mutationFn: changePassword, onSuccess, onError });
};
