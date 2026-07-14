import { initiatePasswordReset, login, resetPassword } from '@/services/auth';
import type {
  ErrorResponse,
  InitiatePasswordResetData,
  LoginData,
  ResetPasswordData,
  TokenResponse,
} from '@/services/auth';
import { changePassword, type OkResponse } from '@/services/profile';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<TokenResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<TokenResponse>,
  AxiosError<ErrorResponse>,
  LoginData
> => {
  return useMutation<AxiosResponse<TokenResponse>, AxiosError<ErrorResponse>, LoginData>({
    mutationFn: login,
    onSuccess,
    onError,
  });
};

export const useInitiatePasswordReset = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<OkResponse>,
  AxiosError<ErrorResponse>,
  InitiatePasswordResetData
> => {
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, InitiatePasswordResetData>({
    mutationFn: initiatePasswordReset,
    onSuccess,
    onError,
  });
};

export const useResetPassword = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<OkResponse>,
  AxiosError<ErrorResponse>,
  ResetPasswordData
> => {
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, ResetPasswordData>({
    mutationFn: resetPassword,
    onSuccess,
    onError,
  });
};

export const useChangePassword = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<OkResponse>,
  AxiosError<ErrorResponse>,
  ResetPasswordData
> => {
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, ResetPasswordData>({ mutationFn: changePassword, onSuccess, onError });
};
