import { type SuccessResponse } from '@/services/invitation';
import {
  createPreference,
  setRetain,
  type CreatePreferenceResponse,
  type PreferenceOrder,
} from '@/services/preference';
import type { UseMutationResult } from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useRetain = ({
  onSuccess,
  onError,
}: ResolutionFunctions<SuccessResponse>): UseMutationResult<AxiosResponse<SuccessResponse>, AxiosError, void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- void is correct for no arguments
  return useCustomMutation<void, SuccessResponse>({
    mutationFn: setRetain,
    onSuccess,
    onError,
  });
};

export const useCreatePreference = ({
  onSuccess,
  onError,
}: ResolutionFunctions<CreatePreferenceResponse>): UseMutationResult<
  AxiosResponse<CreatePreferenceResponse>,
  AxiosError,
  PreferenceOrder
> => {
  return useCustomMutation<PreferenceOrder, CreatePreferenceResponse>({
    mutationFn: createPreference,
    onSuccess,
    onError,
  });
};
