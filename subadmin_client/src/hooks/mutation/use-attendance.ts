import { type ErrorResponse } from '@/services/auth';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

import { type ResolutionFunctions, useCustomMutation } from './use-custom-mutation';
import {
  createSession,
  uploadGateScan,
  uploadFingerprint,
  computeAttendance,
  sendMail,
  updateResultStatus,
  bulkUpdateStatus,
} from '@/services/attendance';
import {
  type AttendanceSession,
  type AttendanceResult,
  type ComputeAttendanceResponse,
  type SendMailResponse,
} from '@/types/attendance';

export const useCreateSession = ({
  onSuccess,
  onError,
}: ResolutionFunctions<AttendanceSession> = {}): UseMutationResult<
  AxiosResponse<AttendanceSession>,
  AxiosError<ErrorResponse>,
  string
> => {
  return useCustomMutation<string, AttendanceSession>({
    mutationFn: createSession,
    onSuccess,
    onError,
  });
};

interface UploadGateScanArgs {
  sessionId: number;
  file: File;
}

export const useUploadGateScan = ({
  onSuccess,
  onError,
}: ResolutionFunctions<void> = {}): UseMutationResult<
  AxiosResponse<void>,
  AxiosError<ErrorResponse>,
  UploadGateScanArgs
> => {
  return useCustomMutation<UploadGateScanArgs, void>({
    mutationFn: ({ sessionId, file }) => uploadGateScan(sessionId, file),
    onSuccess,
    onError,
  });
};

export const useUploadFingerprint = ({
  onSuccess,
  onError,
}: ResolutionFunctions<void> = {}): UseMutationResult<
  AxiosResponse<void>,
  AxiosError<ErrorResponse>,
  UploadGateScanArgs
> => {
  return useCustomMutation<UploadGateScanArgs, void>({
    mutationFn: ({ sessionId, file }) => uploadFingerprint(sessionId, file),
    onSuccess,
    onError,
  });
};

export const useComputeAttendance = ({
  onSuccess,
  onError,
}: ResolutionFunctions<ComputeAttendanceResponse> = {}): UseMutationResult<
  AxiosResponse<ComputeAttendanceResponse>,
  AxiosError<ErrorResponse>,
  number
> => {
  return useCustomMutation<number, ComputeAttendanceResponse>({
    mutationFn: computeAttendance,
    onSuccess,
    onError,
  });
};

interface SendMailArgs {
  sessionId: number;
  resultIds?: number[];
}

export const useSendMail = ({
  onSuccess,
  onError,
}: ResolutionFunctions<SendMailResponse> = {}): UseMutationResult<
  AxiosResponse<SendMailResponse>,
  AxiosError<ErrorResponse>,
  SendMailArgs
> => {
  return useCustomMutation<SendMailArgs, SendMailResponse>({
    mutationFn: ({ sessionId, resultIds }) => sendMail(sessionId, resultIds),
    onSuccess,
    onError,
  });
};

interface UpdateResultStatusArgs {
  resultId: number;
  status: string;
}

export const useUpdateResultStatus = ({
  onSuccess,
  onError,
}: ResolutionFunctions<AttendanceResult> = {}): UseMutationResult<
  AxiosResponse<AttendanceResult>,
  AxiosError<ErrorResponse>,
  UpdateResultStatusArgs
> => {
  return useCustomMutation<UpdateResultStatusArgs, AttendanceResult>({
    mutationFn: ({ resultId, status }) => updateResultStatus(resultId, status),
    onSuccess,
    onError,
  });
};

interface BulkUpdateStatusArgs {
  resultIds: number[];
  status: string;
}

export const useBulkUpdateStatus = ({
  onSuccess,
  onError,
}: ResolutionFunctions<AttendanceResult[]> = {}): UseMutationResult<
  AxiosResponse<AttendanceResult[]>,
  AxiosError<ErrorResponse>,
  BulkUpdateStatusArgs
> => {
  return useCustomMutation<BulkUpdateStatusArgs, AttendanceResult[]>({
    mutationFn: ({ resultIds, status }) => bulkUpdateStatus(resultIds, status),
    onSuccess,
    onError,
  });
};
