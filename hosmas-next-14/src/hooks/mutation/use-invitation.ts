import { acceptInvitation, deleteInvitation, sendInvitation, withdrawInvitation } from '@/services/invitation';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useSendInvitation = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: sendInvitation,
    onSuccess,
    onError,
  });
};

export const useWithdrawInvitation = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: withdrawInvitation,
    onSuccess,
    onError,
  });
};

export const useAcceptInvitation = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: acceptInvitation,
    onSuccess,
    onError,
  });
};

export const useDeleteInvitation = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: deleteInvitation,
    onSuccess,
    onError,
  });
};
