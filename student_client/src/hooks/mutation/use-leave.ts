import { type ErrorResponse } from '@/services/auth';
import { createLeave, type CreateLeaveRequest, type CreateLeaveResponse } from '@/services/leave';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useCreateLeaveSlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<CreateLeaveResponse>): UseMutationResult<
  AxiosResponse<CreateLeaveResponse>,
  AxiosError<ErrorResponse>,
  CreateLeaveRequest
> => {
  return useCustomMutation<CreateLeaveRequest, CreateLeaveResponse>({
    mutationFn: createLeave,
    onSuccess,
    onError,
  });
};
