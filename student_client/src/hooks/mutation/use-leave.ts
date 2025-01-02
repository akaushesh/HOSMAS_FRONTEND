import { type ErrorResponse } from '@/services/auth';
import { createLeave, type UpdateLeaveResponse, type CreateLeaveRequest, type CreateLeaveResponse, type UpdateLeaveRequest, updateLeave, type DeleteLeaveResponse,type DeleteLeaveParams, deleteLeave } from '@/services/leave';
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

export const useUpdateLeaveSlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<UpdateLeaveResponse>): UseMutationResult<
  AxiosResponse<UpdateLeaveResponse>,
  AxiosError<ErrorResponse>,
  UpdateLeaveRequest
> => {
  return useCustomMutation<UpdateLeaveRequest, UpdateLeaveResponse>({
    mutationFn: updateLeave,
    onSuccess,
    onError,
  });
};

export const useDeleteLeaveSlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<DeleteLeaveResponse>): UseMutationResult<
  AxiosResponse<DeleteLeaveResponse>,
  AxiosError<ErrorResponse>,
  DeleteLeaveParams
> => {
  return useCustomMutation<DeleteLeaveParams, DeleteLeaveResponse>({
    mutationFn: deleteLeave,
    onSuccess,
    onError,
  });
};
