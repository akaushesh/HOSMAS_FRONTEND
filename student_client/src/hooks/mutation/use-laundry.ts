import { type ErrorResponse } from '@/services/auth';
import {
  createLaundrySlip,
  updateLaundrySlip,
  type LaundryItems,
  type LaundrySlipResponse,
  type UpdateLaundryItems,
} from '@/services/laundry';
import { useMutation } from '@tanstack/react-query';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';


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
}: {
  onSuccess?: (res: AxiosResponse<LaundrySlipResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<LaundrySlipResponse>,
  AxiosError<ErrorResponse>,
  LaundryItems
> => {
  return useMutation<AxiosResponse<LaundrySlipResponse>, AxiosError<ErrorResponse>, LaundryItems>({
    mutationFn: createLaundrySlip,
    onSuccess,
    onError,
  });
};

export const useUpdateLaundrySlip = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (res: AxiosResponse<LaundrySlipResponse>) => void;
  onError?: (err: AxiosError<ErrorResponse>) => void;
}): UseMutationResult<
  AxiosResponse<LaundrySlipResponse>,
  AxiosError<ErrorResponse>,
  UpdateLaundryItems
> => {
  return useMutation<AxiosResponse<LaundrySlipResponse>, AxiosError<ErrorResponse>, UpdateLaundryItems>({
    mutationFn: updateLaundrySlip,
    onSuccess,
    onError,
  });
};
