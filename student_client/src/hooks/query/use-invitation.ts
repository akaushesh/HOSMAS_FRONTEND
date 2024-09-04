import { getReceivedInvitations, getSentInvitationStatus } from '@/services/invitation';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useSentInvitationStatus = (): UseQueryResult => {
  return useQuery({ queryFn: getSentInvitationStatus, queryKey: ['getSentInvitationStatus'] });
};

export const useReceivedInvitationStatus = (): UseQueryResult => {
  return useQuery({ queryFn: getReceivedInvitations, queryKey: ['getReceivedInvitations'] });
};
