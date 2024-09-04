import { leaveGroup, searchStudent, transferOwnersip } from '@/services/group';
import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation } from './use-custom-mutation';
import type { ResolutionFunctions } from './use-custom-mutation';

export const useLogin = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: searchStudent, onSuccess, onError });
};

export const useTransferOwnership = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: transferOwnersip, onSuccess, onError });
};

export const useSearchStudent = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: searchStudent, onSuccess, onError });
};

export const useLeaveGroup = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: leaveGroup, onSuccess, onError });
};
