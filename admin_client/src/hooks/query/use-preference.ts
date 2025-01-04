import { getAllLevel, getChoices, getPreference, getPreferenceStatus } from '@/services/preference';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useChoices = (): UseQueryResult => {
  return useQuery({ queryFn: getChoices, queryKey: ['getChoices'] });
};

export const usePreference = (): UseQueryResult => {
  return useQuery({ queryFn: getPreference, queryKey: ['getPreference'] });
};

export const usePreferenceStatus = (): UseQueryResult => {
  return useQuery({ queryFn: getPreferenceStatus, queryKey: ['getPreferenceStatus'] });
};

export const useLevels = (): UseQueryResult => {
  return useQuery({ queryFn: getAllLevel, queryKey: ['getLevel'] });
};
