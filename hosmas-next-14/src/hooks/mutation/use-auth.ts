import { login } from '@/services/auth';
import { changePassword } from '@/services/profile';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useLogin = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });
};

export const useChangePassword = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess,
    onError,
  });
};
