import { type ErrorResponse } from '@/services/auth';
import { createCleaningRequest, markCleaningRequestComplete } from '@/services/cleaning';
import type {
  CleaningRequestCompleteData,
  CleaningRequestCompleteResponse,
  CreateCleaningRequestParams,
  CreateCleaningRequestResponse,
} from '@/services/cleaning';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useMarkCleaningRequestComplete = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<CleaningRequestCompleteResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<CleaningRequestCompleteResponse>,
  AxiosError<ErrorResponse>,
  CleaningRequestCompleteData
> => {
  return useMutation<AxiosResponse<CleaningRequestCompleteResponse>, AxiosError<ErrorResponse>, CleaningRequestCompleteData>({
    mutationFn: markCleaningRequestComplete,
    onSuccess,
    onError,
  });
};

export const useCreateCleaningRequest = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<CreateCleaningRequestResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<CreateCleaningRequestResponse>,
  AxiosError<ErrorResponse>,
  CreateCleaningRequestParams
> => {
  return useMutation<AxiosResponse<CreateCleaningRequestResponse>, AxiosError<ErrorResponse>, CreateCleaningRequestParams>({
    mutationFn: createCleaningRequest,
    onSuccess,
    onError,
  });
};
