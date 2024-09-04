import { initiatePasswordReset, login, resetPassword } from '@/services/auth';
import { changePassword } from '@/services/profile';
import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation } from './use-custom-mutation';
import type { ResolutionFunctions } from './use-custom-mutation';

export const useLogin = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: login, onSuccess, onError });
};

export const useInitiatePasswordReset = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: initiatePasswordReset, onSuccess, onError });
};

export const useResetPassword = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: resetPassword, onSuccess, onError });
};
export const useChangePassword = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: changePassword, onSuccess, onError });
};
