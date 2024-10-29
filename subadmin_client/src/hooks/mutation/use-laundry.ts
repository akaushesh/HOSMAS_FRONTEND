import type { UseMutationResult } from '@tanstack/react-query';

import { useCustomMutation } from './use-custom-mutation';
import type { ResolutionFunctions } from './use-custom-mutation';
import { checkoutLaundrySlip, deliverLaundry, getLaundryDetails, getSlipTransID } from '@/services/laundry';

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



export const useCheckoutSlip = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: checkoutLaundrySlip, onSuccess, onError });
};

export const useDeliverLaundry = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: deliverLaundry, onSuccess, onError });
};

export const useVerifySlip = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: getSlipTransID, onSuccess, onError });
};

export const useLaundryDetails = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
  return useCustomMutation({ mutationFn: getLaundryDetails, onSuccess, onError });
};


