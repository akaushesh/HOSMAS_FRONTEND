import { acceptInvitation, deleteInvitation, sendInvitation, withdrawInvitation } from '@/services/invitation';
import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useSendInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(sendInvitation, onSuccess, onError);
};

export const useWithdrawInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(withdrawInvitation, onSuccess, onError);
};

export const useAcceptInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(acceptInvitation, onSuccess, onError);
};

export const useDeleteInvitation = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(deleteInvitation, onSuccess, onError);
};
