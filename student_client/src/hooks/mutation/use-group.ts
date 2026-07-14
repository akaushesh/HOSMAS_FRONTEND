import { type ErrorResponse } from '@/services/auth';
import { createGroup, leaveGroup, searchStudent, transferOwnersip } from '@/services/group';
import type { Student, StudentData } from '@/services/group';
import type { OkResponse } from '@/services/profile';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useSearchStudent = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<Student>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<Student>, AxiosError<ErrorResponse>, StudentData> => {
  return useMutation<AxiosResponse<Student>, AxiosError<ErrorResponse>, StudentData>({
    mutationFn: searchStudent,
    onSuccess,
    onError,
  });
};

export const useTransferOwnership = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, StudentData> => {
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, StudentData>({
    mutationFn: transferOwnersip,
    onSuccess,
    onError,
  });
};

export const useLeaveGroup = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- void is correct for no arguments
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, void>({
    mutationFn: leaveGroup,
    onSuccess,
    onError,
  });
};

export const useCreateGroup = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- void is correct for no arguments
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, void>({
    mutationFn: createGroup,
    onSuccess,
    onError,
  });
};
