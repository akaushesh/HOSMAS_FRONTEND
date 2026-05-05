import { createGroup, leaveGroup, searchStudent, transferOwnersip } from '@/services/group';
import type { Student, StudentData } from '@/services/group';
import type { OkResponse } from '@/services/profile';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useSearchStudent = ({
  onSuccess,
  onError,
}: ResolutionFunctions<Student>): UseMutationResult<AxiosResponse<Student>, AxiosError, StudentData> => {
  return useCustomMutation<StudentData, Student>({
    mutationFn: searchStudent,
    onSuccess,
    onError,
  });
};

export const useTransferOwnership = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<AxiosResponse<OkResponse>, AxiosError, StudentData> => {
  return useCustomMutation<StudentData, OkResponse>({
    mutationFn: transferOwnersip,
    onSuccess,
    onError,
  });
};

export const useLeaveGroup = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<AxiosResponse<OkResponse>, AxiosError, void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- void is correct for no arguments
  return useCustomMutation<void, OkResponse>({
    mutationFn: leaveGroup,
    onSuccess,
    onError,
  });
};

export const useCreateGroup = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<AxiosResponse<OkResponse>, AxiosError, void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- void is correct for no arguments
  return useCustomMutation<void, OkResponse>({
    mutationFn: createGroup,
    onSuccess,
    onError,
  });
};
