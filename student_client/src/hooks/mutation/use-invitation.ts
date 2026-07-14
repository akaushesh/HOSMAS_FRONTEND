import { type ErrorResponse } from '@/services/auth';
import { acceptInvitation, deleteInvitation, sendInvitation, withdrawInvitation } from '@/services/invitation';
import type { InvitationData, SuccessResponse, TokenData } from '@/services/invitation';
import type { OkResponse } from '@/services/profile';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useSendInvitation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<SuccessResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<SuccessResponse>, AxiosError<ErrorResponse>, TokenData> => {
  return useMutation<AxiosResponse<SuccessResponse>, AxiosError<ErrorResponse>, TokenData>({
    mutationFn: sendInvitation,
    onSuccess,
    onError,
  });
};

export const useWithdrawInvitation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<SuccessResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<SuccessResponse>,
  AxiosError<ErrorResponse>,
  InvitationData
> => {
  return useMutation<AxiosResponse<SuccessResponse>, AxiosError<ErrorResponse>, InvitationData>({
    mutationFn: withdrawInvitation,
    onSuccess,
    onError,
  });
};

export const useAcceptInvitation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, InvitationData> => {
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, InvitationData>({
    mutationFn: acceptInvitation,
    onSuccess,
    onError,
  });
};

export const useDeleteInvitation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<OkResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, InvitationData> => {
  return useMutation<AxiosResponse<OkResponse>, AxiosError<ErrorResponse>, InvitationData>({
    mutationFn: deleteInvitation,
    onSuccess,
    onError,
  });
};
