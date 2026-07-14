import { type SuccessResponse } from '@/services/invitation';
import {
  createPreference,
  setRetain,
  type CreatePreferenceResponse,
  type PreferenceOrder,
} from '@/services/preference';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

export const useRetain = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<SuccessResponse>) => void;
  onError?: (err: AxiosError) => void;
}): UseMutationResult<AxiosResponse<SuccessResponse>, AxiosError, void> => {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- void is correct for no arguments
  return useMutation<AxiosResponse<SuccessResponse>, AxiosError, void>({
    mutationFn: setRetain,
    onSuccess,
    onError,
  });
};

export const useCreatePreference = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<CreatePreferenceResponse>) => void;
  onError?: (err: AxiosError) => void;
}): UseMutationResult<
  AxiosResponse<CreatePreferenceResponse>,
  AxiosError,
  PreferenceOrder
> => {
  return useMutation<AxiosResponse<CreatePreferenceResponse>, AxiosError, PreferenceOrder>({
    mutationFn: createPreference,
    onSuccess,
    onError,
  });
};
