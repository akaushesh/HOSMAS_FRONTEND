import { createPreference, setRetain } from '@/services/preference';
import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useRetain = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(setRetain, onSuccess, onError);
};

export const useCreatePreference = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation(createPreference, onSuccess, onError);
};
