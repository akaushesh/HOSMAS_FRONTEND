import { getFAQ } from '@/services/faq';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useFaq = (): UseQueryResult => {
  return useQuery({ queryFn: getFAQ, queryKey: ['getFaq'] });
};
