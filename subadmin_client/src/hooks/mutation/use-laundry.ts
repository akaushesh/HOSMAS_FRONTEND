import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation } from './use-custom-mutation';
import type { ResolutionFunctions } from './use-custom-mutation';
import { type CheckoutLaundryItems, checkoutLaundrySlip, deliverLaundry, getLaundryDetails,type  GetSlipTransID, getSlipTransID, type LaundryDetailsResponse,type  LaundrySlipResponse, type SubmissionResponse } from '@/services/laundry';
import { type AxiosError, type AxiosResponse } from 'axios';
import { type ErrorResponse } from '@/services/auth';

export const laundryItems:Record<string,string>={
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
}



export const useCheckoutSlip = ({ onSuccess, onError }: ResolutionFunctions<SubmissionResponse>): UseMutationResult<
  AxiosResponse<SubmissionResponse>,
  AxiosError<ErrorResponse>,
  CheckoutLaundryItems
> => {
  return useCustomMutation<CheckoutLaundryItems,SubmissionResponse>({ mutationFn: checkoutLaundrySlip, onSuccess, onError });
};

export const useDeliverLaundry = ({ onSuccess, onError }: ResolutionFunctions<SubmissionResponse>): UseMutationResult<AxiosResponse<SubmissionResponse>,AxiosError<ErrorResponse>,string> => {
  return useCustomMutation<string,SubmissionResponse>({ mutationFn: deliverLaundry, onSuccess, onError });
};

export const useVerifySlip = ({ onSuccess, onError }: ResolutionFunctions<LaundrySlipResponse>): UseMutationResult <AxiosResponse<LaundrySlipResponse>,AxiosError<ErrorResponse>,GetSlipTransID>=> {
  return useCustomMutation<GetSlipTransID,LaundrySlipResponse>({ mutationFn: getSlipTransID, onSuccess, onError });
};

export const useLaundryDetails = ({ onSuccess, onError }: ResolutionFunctions<LaundryDetailsResponse>): UseMutationResult<AxiosResponse<LaundryDetailsResponse>,AxiosError<ErrorResponse>,number> => {
  return useCustomMutation<number,LaundryDetailsResponse>({ mutationFn: getLaundryDetails, onSuccess, onError });
};


