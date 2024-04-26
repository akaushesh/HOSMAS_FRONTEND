import { leaveGroup, searchStudent, transferOwnersip } from '@/services/group';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useSearchStudent = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: searchStudent,
    onSuccess,
    onError,
  });
};

export const useTransferOwnership = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: transferOwnersip,
    onSuccess,
    onError,
  });
};

export const useLeaveGroup = (
  onSuccess?: (response: AxiosResponse) => void,
  onError?: (error: AxiosError) => void
): UseMutationResult => {
  return useMutation({
    mutationFn: leaveGroup,
    onSuccess,
    onError,
  });
};
