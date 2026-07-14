import { type ErrorResponse } from '@/services/auth';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

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
}: { onSuccess?: (res: AxiosResponse<AttendanceSession>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<AttendanceSession>,
  AxiosError<ErrorResponse>,
  string
> => {
  return useMutation<AxiosResponse<AttendanceSession>, AxiosError<ErrorResponse>, string>({
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
}: { onSuccess?: (res: AxiosResponse<void>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<void>,
  AxiosError<ErrorResponse>,
  UploadGateScanArgs
> => {
  return useMutation<AxiosResponse<void>, AxiosError<ErrorResponse>, UploadGateScanArgs>({
    mutationFn: ({ sessionId, file }) => uploadGateScan(sessionId, file),
    onSuccess,
    onError,
  });
};

export const useUploadFingerprint = ({
  onSuccess,
  onError,
}: { onSuccess?: (res: AxiosResponse<void>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<void>,
  AxiosError<ErrorResponse>,
  UploadGateScanArgs
> => {
  return useMutation<AxiosResponse<void>, AxiosError<ErrorResponse>, UploadGateScanArgs>({
    mutationFn: ({ sessionId, file }) => uploadFingerprint(sessionId, file),
    onSuccess,
    onError,
  });
};

export const useComputeAttendance = ({
  onSuccess,
  onError,
}: { onSuccess?: (res: AxiosResponse<ComputeAttendanceResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<ComputeAttendanceResponse>,
  AxiosError<ErrorResponse>,
  number
> => {
  return useMutation<AxiosResponse<ComputeAttendanceResponse>, AxiosError<ErrorResponse>, number>({
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
}: { onSuccess?: (res: AxiosResponse<SendMailResponse>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<SendMailResponse>,
  AxiosError<ErrorResponse>,
  SendMailArgs
> => {
  return useMutation<AxiosResponse<SendMailResponse>, AxiosError<ErrorResponse>, SendMailArgs>({
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
}: { onSuccess?: (res: AxiosResponse<AttendanceResult>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<AttendanceResult>,
  AxiosError<ErrorResponse>,
  UpdateResultStatusArgs
> => {
  return useMutation<AxiosResponse<AttendanceResult>, AxiosError<ErrorResponse>, UpdateResultStatusArgs>({
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
}: { onSuccess?: (res: AxiosResponse<AttendanceResult[]>) => void; onError?: (err: AxiosError<ErrorResponse>) => void } = {}): UseMutationResult<
  AxiosResponse<AttendanceResult[]>,
  AxiosError<ErrorResponse>,
  BulkUpdateStatusArgs
> => {
  return useMutation<AxiosResponse<AttendanceResult[]>, AxiosError<ErrorResponse>, BulkUpdateStatusArgs>({
    mutationFn: ({ resultIds, status }) => bulkUpdateStatus(resultIds, status),
    onSuccess,
    onError,
  });
};
