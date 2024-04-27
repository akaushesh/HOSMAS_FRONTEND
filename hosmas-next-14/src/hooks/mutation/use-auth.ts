import { login } from '@/services/auth';
import { changePassword } from '@/services/profile';
import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation } from './use-custom-mutation';
import type { ResolutionFunctions } from './use-custom-mutation';

export const useLogin = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(login, onSuccess, onError);
};

export const useChangePassword = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(changePassword, onSuccess, onError);
};
