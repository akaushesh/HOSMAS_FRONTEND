import { type ErrorResponse } from '@/services/auth';
import {
  createLaundrySlip,
  updateLaundrySlip,
  type LaundryItems,
  type LaundrySlipResponse,
  type UpdateLaundryItems,
} from '@/services/laundry';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';


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

export const useCreateLaundrySlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<LaundrySlipResponse>): UseMutationResult<
  AxiosResponse<LaundrySlipResponse>,
  AxiosError<ErrorResponse>,
  LaundryItems
> => {
  return useCustomMutation<LaundryItems, LaundrySlipResponse>({
    mutationFn: createLaundrySlip,
    onSuccess,
    onError,
  });
};

export const useUpdateLaundrySlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<LaundrySlipResponse>): UseMutationResult<
  AxiosResponse<LaundrySlipResponse>,
  AxiosError<ErrorResponse>,
  UpdateLaundryItems
> => {
  return useCustomMutation<UpdateLaundryItems, LaundrySlipResponse>({
    mutationFn: updateLaundrySlip,
    onSuccess,
    onError,
  });
};
