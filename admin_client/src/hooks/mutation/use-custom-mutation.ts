import type { ErrorResponse } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export interface ResolutionFunctions<TData = never> {
  onSuccess?: (response: AxiosResponse<TData>) => void;
  onError?: (error: AxiosError<ErrorResponse>) => void;
}

export interface CustomMutationInterface<TArgs = never, TData = never> extends ResolutionFunctions<TData> {
  mutationFn: (args: TArgs) => Promise<AxiosResponse<TData>>;
}

export const useCustomMutation = <TArgs = never, TData = never>({
  mutationFn,
  onSuccess,
  onError,
}: CustomMutationInterface<TArgs, TData>): UseMutationResult<
  AxiosResponse<TData>,
  AxiosError<ErrorResponse>,
  TArgs
> => {
  return useMutation<AxiosResponse<TData>, AxiosError<ErrorResponse>, TArgs>({
    mutationFn,
    onSuccess,
    onError,
  });
};
