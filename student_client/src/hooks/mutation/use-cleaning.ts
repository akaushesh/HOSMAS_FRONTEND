import { createCleaningRequest, markCleaningRequestComplete } from '@/services/cleaning';
import { type UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useMarkCleaningRequestComplete = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: markCleaningRequestComplete, onSuccess, onError });
};

export const useCreateCleaningRequest = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: createCleaningRequest, onSuccess, onError });
};
