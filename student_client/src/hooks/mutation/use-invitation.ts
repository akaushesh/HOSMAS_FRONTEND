import { acceptInvitation, deleteInvitation, sendInvitation, withdrawInvitation } from '@/services/invitation';
import type { InvitationData, SuccessResponse, TokenData } from '@/services/invitation';
import type { OkResponse } from '@/services/profile';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useSendInvitation = ({
  onSuccess,
  onError,
}: ResolutionFunctions<SuccessResponse>): UseMutationResult<AxiosResponse<SuccessResponse>, AxiosError, TokenData> => {
  return useCustomMutation<TokenData, SuccessResponse>({
    mutationFn: sendInvitation,
    onSuccess,
    onError,
  });
};

export const useWithdrawInvitation = ({
  onSuccess,
  onError,
}: ResolutionFunctions<SuccessResponse>): UseMutationResult<
  AxiosResponse<SuccessResponse>,
  AxiosError,
  InvitationData
> => {
  return useCustomMutation<InvitationData, SuccessResponse>({
    mutationFn: withdrawInvitation,
    onSuccess,
    onError,
  });
};

export const useAcceptInvitation = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<AxiosResponse<OkResponse>, AxiosError, InvitationData> => {
  return useCustomMutation<InvitationData, OkResponse>({
    mutationFn: acceptInvitation,
    onSuccess,
    onError,
  });
};

export const useDeleteInvitation = ({
  onSuccess,
  onError,
}: ResolutionFunctions<OkResponse>): UseMutationResult<AxiosResponse<OkResponse>, AxiosError, InvitationData> => {
  return useCustomMutation<InvitationData, OkResponse>({
    mutationFn: deleteInvitation,
    onSuccess,
    onError,
  });
};
