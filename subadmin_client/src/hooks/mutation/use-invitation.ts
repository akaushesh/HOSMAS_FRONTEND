import { acceptInvitation, deleteInvitation, sendInvitation, withdrawInvitation } from '@/services/invitation';
import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useSendInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: sendInvitation, onSuccess, onError });
};

export const useWithdrawInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: withdrawInvitation, onSuccess, onError });
};

export const useAcceptInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: acceptInvitation, onSuccess, onError });
};

export const useDeleteInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: deleteInvitation, onSuccess, onError });
};
