import { createCleaningRequest, markCleaningRequestComplete } from '@/services/cleaning';
import type {
  CleaningRequestCompleteData,
  CleaningRequestCompleteResponse,
  CreateCleaningRequestParams,
  CreateCleaningRequestResponse,
} from '@/services/cleaning';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useMarkCleaningRequestComplete = ({
  onSuccess,
  onError,
}: ResolutionFunctions<CleaningRequestCompleteResponse>): UseMutationResult<
  AxiosResponse<CleaningRequestCompleteResponse>,
  AxiosError,
  CleaningRequestCompleteData
> => {
  return useCustomMutation<CleaningRequestCompleteData, CleaningRequestCompleteResponse>({
    mutationFn: markCleaningRequestComplete,
    onSuccess,
    onError,
  });
};

export const useCreateCleaningRequest = ({
  onSuccess,
  onError,
}: ResolutionFunctions<CreateCleaningRequestResponse>): UseMutationResult<
  AxiosResponse<CreateCleaningRequestResponse>,
  AxiosError,
  CreateCleaningRequestParams
> => {
  return useCustomMutation<CreateCleaningRequestParams, CreateCleaningRequestResponse>({
    mutationFn: createCleaningRequest,
    onSuccess,
    onError,
  });
};
