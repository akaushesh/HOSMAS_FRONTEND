import { type ErrorResponse } from '@/services/auth';
import { submitFeedback, type CreateFeedbackRequest, type FeedbackResponse } from '@/services/mess';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';

export const useSubmitFeedback = ({
  onSuccess,
  onError,
}: ResolutionFunctions<FeedbackResponse> = {}): UseMutationResult<
  AxiosResponse<FeedbackResponse>,
  AxiosError<ErrorResponse>,
  CreateFeedbackRequest
> => {

  return useCustomMutation<CreateFeedbackRequest, FeedbackResponse>({
    mutationFn: submitFeedback,
    onSuccess,
    onError,
  });
};
