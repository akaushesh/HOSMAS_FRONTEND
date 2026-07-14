import { type ErrorResponse } from '@/services/auth';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { deleteLeave, setAutoApprove } from '@/services/leave';
import { updateLeave, type UpdateLeaveRequest } from '../../services/leave';


// export const useCreateLeaveSlip = ({
//   onSuccess,
//   onError,
// }: { onSuccess?: (res: AxiosResponse<CreateLeaveResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<
//   AxiosResponse<CreateLeaveResponse>,
//   AxiosError<ErrorResponse>,
//   CreateLeaveRequest
// > => {
//   return useMutation<CreateLeaveRequest, CreateLeaveResponse>({
//     mutationFn: createLeave,
//     onSuccess,
//     onError,
//   });
// };

export const useAutoApprove = ({
  onSuccess,
  onError,
}: { onSuccess?: (res: AxiosResponse<string>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<ErrorResponse>,
  boolean
> => {
  return useMutation<AxiosResponse<string>, AxiosError<ErrorResponse>, boolean>({
    mutationFn: setAutoApprove,
    onSuccess,
    onError,
  });
};


export const useUpdateLeaveSlip = ({
  onSuccess,
  onError,
}: { onSuccess?: (res: AxiosResponse<string>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<ErrorResponse>,
  UpdateLeaveRequest
> => {
  return useMutation<AxiosResponse<string>, AxiosError<ErrorResponse>, UpdateLeaveRequest>({
    mutationFn: updateLeave,
    onSuccess,
    onError,
  });
};

export const useDeleteLeaveSlip = ({
  onSuccess,
  onError,
}: { onSuccess?: (res: AxiosResponse<string>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<ErrorResponse>,
  string
> => {
  return useMutation<AxiosResponse<string>, AxiosError<ErrorResponse>, string>({
    mutationFn: deleteLeave,
    onSuccess,
    onError,
  });
};
