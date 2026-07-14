import { type ErrorResponse } from '@/services/auth';
import { submitFeedback, type CreateFeedbackRequest, type FeedbackResponse } from '@/services/mess';
import { useMutation } from '@tanstack/react-query';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export const useSubmitFeedback = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<FeedbackResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
} = {}): UseMutationResult<
  AxiosResponse<FeedbackResponse>,
  AxiosError<ErrorResponse>,
  CreateFeedbackRequest
> => {

  return useMutation<AxiosResponse<FeedbackResponse>, AxiosError<ErrorResponse>, CreateFeedbackRequest>({
    mutationFn: submitFeedback,
    onSuccess,
    onError,
  });
};
