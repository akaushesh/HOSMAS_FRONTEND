import { type ErrorResponse } from '@/services/auth';
import { createLeave, type UpdateLeaveResponse, type CreateLeaveRequest, type CreateLeaveResponse, type UpdateLeaveRequest, updateLeave, type DeleteLeaveResponse,type DeleteLeaveParams, deleteLeave } from '@/services/leave';
import { useMutation } from '@tanstack/react-query';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useCreateLeaveSlip = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<CreateLeaveResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<CreateLeaveResponse>,
  AxiosError<ErrorResponse>,
  CreateLeaveRequest
> => {
  return useMutation<AxiosResponse<CreateLeaveResponse>, AxiosError<ErrorResponse>, CreateLeaveRequest>({
    mutationFn: createLeave,
    onSuccess,
    onError,
  });
};

export const useUpdateLeaveSlip = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<UpdateLeaveResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<UpdateLeaveResponse>,
  AxiosError<ErrorResponse>,
  UpdateLeaveRequest
> => {
  return useMutation<AxiosResponse<UpdateLeaveResponse>, AxiosError<ErrorResponse>, UpdateLeaveRequest>({
    mutationFn: updateLeave,
    onSuccess,
    onError,
  });
};

export const useDeleteLeaveSlip = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<DeleteLeaveResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<DeleteLeaveResponse>,
  AxiosError<ErrorResponse>,
  DeleteLeaveParams
> => {
  return useMutation<AxiosResponse<DeleteLeaveResponse>, AxiosError<ErrorResponse>, DeleteLeaveParams>({
    mutationFn: deleteLeave,
    onSuccess,
    onError,
  });
};
