import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type CheckoutLaundryItems, checkoutLaundrySlip, deliverLaundry, getLaundryDetails, type GetSlipTransID, getSlipTransID, type LaundryDetailsResponse, type LaundrySlipResponse, type SubmissionResponse } from '@/services/laundry';
import { type AxiosError, type AxiosResponse } from 'axios';
import { type ErrorResponse } from '@/services/auth';

export const laundryItems: Record<string, string> = {
  jeans: 'Jeans',
  pants: 'Pants',
  pyjama: 'Pyjama',
  shorts: 'Shorts',
  shirts: 'Shirts',
  tshirts: 'T-Shirts',
  kurta_salwar: 'Kurta/Salwar',
  skirts: 'Skirt',
  dupatta: 'Dupatta',
  bedsheet: 'Bed Sheet',
  pillow_cover: 'Pillow Cover',
  towel_hand_towel: 'Towel/H-Towel',
  turban: 'Turban',
  upper_hood: 'Upper Hood',
};

export const useCheckoutSlip = ({ onSuccess, onError }: { onSuccess?: (res: AxiosResponse<SubmissionResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<
  AxiosResponse<SubmissionResponse>,
  AxiosError<ErrorResponse>,
  CheckoutLaundryItems
> => {
  return useMutation<AxiosResponse<SubmissionResponse>, AxiosError<ErrorResponse>, CheckoutLaundryItems>({ mutationFn: checkoutLaundrySlip, onSuccess, onError });
};

export const useDeliverLaundry = ({ onSuccess, onError }: { onSuccess?: (res: AxiosResponse<SubmissionResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<AxiosResponse<SubmissionResponse>, AxiosError<ErrorResponse>, string> => {
  return useMutation<AxiosResponse<SubmissionResponse>, AxiosError<ErrorResponse>, string>({ mutationFn: deliverLaundry, onSuccess, onError });
};

export const useVerifySlip = ({ onSuccess, onError }: { onSuccess?: (res: AxiosResponse<LaundrySlipResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<AxiosResponse<LaundrySlipResponse>, AxiosError<ErrorResponse>, GetSlipTransID> => {
  return useMutation<AxiosResponse<LaundrySlipResponse>, AxiosError<ErrorResponse>, GetSlipTransID>({ mutationFn: getSlipTransID, onSuccess, onError });
};

export const useLaundryDetails = ({ onSuccess, onError }: { onSuccess?: (res: AxiosResponse<LaundryDetailsResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void }): UseMutationResult<AxiosResponse<LaundryDetailsResponse>, AxiosError<ErrorResponse>, number> => {
  return useMutation<AxiosResponse<LaundryDetailsResponse>, AxiosError<ErrorResponse>, number>({ mutationFn: getLaundryDetails, onSuccess, onError });
};
