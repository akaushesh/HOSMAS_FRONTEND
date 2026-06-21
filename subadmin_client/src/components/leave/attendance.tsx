'use client';

import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { type Dayjs } from 'dayjs';

import { useListSessions, useSessionResults } from '@/hooks/query/use-attendance';
import {
  useCreateSession,
  useUploadGateScan,
  useUploadFingerprint,
  useComputeAttendance,
  useSendMail,
  useUpdateResultStatus,
  useBulkUpdateStatus,
} from '@/hooks/mutation/use-attendance';
import { type AttendanceSession, type AttendanceResult } from '@/types/attendance';
import {
  saveLocalFile,
  getLocalFile,
  deleteLocalFile,
  downloadFile,
  type LocalFileRecord,
} from '@/services/attendance-db';
import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';
import AttendanceUpload from './attendance-upload';
import AttendanceTable from './attendance-table';

export default function Attendance(): React.JSX.Element {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [activeSession, setActiveSession] = React.useState<AttendanceSession | null>(null);
  const [gateFile, setGateFile] = React.useState<File | null>(null);
  const [gateRollCount, setGateRollCount] = React.useState<number | null>(null);
  const [fingerprintFile, setFingerprintFile] = React.useState<File | null>(null);
  const [fingerprintRollCount, setFingerprintRollCount] = React.useState<number | null>(null);
  const [isRecomputeDialogOpen, setIsRecomputeDialogOpen] = React.useState(false);
  const [lastComputedAt, setLastComputedAt] = React.useState<string | null>(null);
  const [localResults, setLocalResults] = React.useState<AttendanceResult[]>([]);
  const [updatingIds, setUpdatingIds] = React.useState<number[]>([]);
  const [processingStatus, setProcessingStatus] = React.useState<string | null>(null);

  // Local browser file records (IndexedDB)
  const [localGateRecord, setLocalGateRecord] = React.useState<LocalFileRecord | null>(null);
  const [localFingerprintRecord, setLocalFingerprintRecord] = React.useState<LocalFileRecord | null>(null);

  const [snack, setSnack] = React.useState<SnackBarMsg>({ msg: '', type: '' });

  // 1. Queries
  const {
    data: sessionsResponse,
    isLoading: isLoadingSessions,
    refetch: refetchSessions,
  } = useListSessions();

  const sessions = sessionsResponse?.data?.sessions ?? [];

  // Find if there is a session for the selected date
  React.useEffect(() => {
    if (!selectedDate) {
      setActiveSession(null);
      setLastComputedAt(null);
      return;
    }
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const existing = sessions.find((s) => dayjs(s.date).format('YYYY-MM-DD') === formattedDate);
    if (existing) {
      setActiveSession(existing);
      setLastComputedAt(dayjs(existing.createdAt).format('DD-MM-YYYY hh:mm A'));
    } else {
      setActiveSession(null);
      setLastComputedAt(null);
    }
  }, [selectedDate, sessions]);

  // Fetch results when activeSession changes
  const activeSessionId = activeSession?.id ?? 0;
  const {
    data: resultsResponse,
    isLoading: isLoadingResults,
    isFetching: isFetchingResults,
    refetch: refetchResults,
  } = useSessionResults(activeSessionId);

  const results = resultsResponse?.data?.results;

  React.useEffect(() => {
    if (results) {
      setLocalResults(results);
    } else {
      setLocalResults([]);
    }
  }, [results]);

  // Load IndexedDB records when selected date changes
  React.useEffect(() => {
    if (!selectedDate) {
      setLocalGateRecord(null);
      setLocalFingerprintRecord(null);
      return;
    }
    const dateKey = selectedDate.format('YYYY-MM-DD');
    void (async () => {
      const [gate, fp] = await Promise.all([
        getLocalFile(dateKey, 'gate'),
        getLocalFile(dateKey, 'fingerprint'),
      ]);
      setLocalGateRecord(gate);
      setLocalFingerprintRecord(fp);
      // Clear in-memory file state since DB record now represents the truth
      setGateFile(null);
      setGateRollCount(null);
      setFingerprintFile(null);
      setFingerprintRollCount(null);
    })();
  }, [selectedDate]);

  // 2. Mutations
  const { mutateAsync: createSessionMutate, isPending: isCreatingSession } = useCreateSession({
    onSuccess: () => {
      setSnack({ msg: 'Attendance Session created successfully!', type: 'success' });
      void refetchSessions();
    },
    onError: () => {
      setSnack({ msg: 'Failed to create session.', type: 'error' });
    },
  });

  const { mutateAsync: uploadGateScanMutate, isPending: isUploadingGate } = useUploadGateScan({
    onSuccess: () => {
      setSnack({ msg: 'Gate-scan file uploaded successfully!', type: 'success' });
    },
    onError: () => {
      setSnack({ msg: 'Failed to upload gate-scan file.', type: 'error' });
    },
  });

  const { mutateAsync: uploadFingerprintMutate, isPending: isUploadingFingerprint } = useUploadFingerprint({
    onSuccess: () => {
      setSnack({ msg: 'Fingerprint scanner file uploaded successfully!', type: 'success' });
    },
    onError: () => {
      setSnack({ msg: 'Failed to upload fingerprint scanner file.', type: 'error' });
    },
  });

  const isUploadingFile = isUploadingGate || isUploadingFingerprint;

  const { mutateAsync: computeAttendanceMutate, isPending: isComputing } = useComputeAttendance({
    onSuccess: () => {
      setSnack({ msg: 'Attendance computed successfully!', type: 'success' });
      setLastComputedAt(dayjs().format('DD-MM-YYYY hh:mm A'));
      void refetchResults();
    },
    onError: () => {
      setSnack({ msg: 'Failed to compute attendance.', type: 'error' });
    },
  });

  const { mutateAsync: sendMailMutate, isPending: isSendingMails } = useSendMail({
    onSuccess: (res) => {
      setSnack({ msg: `Mails sent successfully to ${res.data.summary.sent} parents!`, type: 'success' });
      void refetchResults();
    },
    onError: () => {
      setSnack({ msg: 'Failed to send mail notifications.', type: 'error' });
    },
  });

  const { mutateAsync: updateStatusMutate } = useUpdateResultStatus({
    onSuccess: () => {
      setSnack({ msg: 'Student status updated.', type: 'success' });
      void refetchResults();
    },
    onError: () => {
      setSnack({ msg: 'Failed to update student status.', type: 'error' });
    },
  });

  const { mutateAsync: bulkUpdateStatusMutate } = useBulkUpdateStatus({
    onSuccess: () => {
      setSnack({ msg: 'Status updated for selected students.', type: 'success' });
      void refetchResults();
    },
    onError: () => {
      setSnack({ msg: 'Failed to perform bulk status update.', type: 'error' });
    },
  });

  // Action Handlers
  const handleGateFileLoaded = (file: File, count: number | null): void => {
    setGateFile(file);
    setGateRollCount(count);
    if (selectedDate) {
      const dateKey = selectedDate.format('YYYY-MM-DD');
      void saveLocalFile(dateKey, 'gate', file).then(() => {
        void getLocalFile(dateKey, 'gate').then(setLocalGateRecord);
      });
    }
  };

  const handleGateFileRemoved = (): void => {
    setGateFile(null);
    setGateRollCount(null);
    if (selectedDate) {
      void deleteLocalFile(selectedDate.format('YYYY-MM-DD'), 'gate').then(() => {
        setLocalGateRecord(null);
      });
    }
  };

  const handleFingerprintFileLoaded = (file: File, count: number | null): void => {
    setFingerprintFile(file);
    setFingerprintRollCount(count);
    if (selectedDate) {
      const dateKey = selectedDate.format('YYYY-MM-DD');
      void saveLocalFile(dateKey, 'fingerprint', file).then(() => {
        void getLocalFile(dateKey, 'fingerprint').then(setLocalFingerprintRecord);
      });
    }
  };

  const handleFingerprintFileRemoved = (): void => {
    setFingerprintFile(null);
    setFingerprintRollCount(null);
    if (selectedDate) {
      void deleteLocalFile(selectedDate.format('YYYY-MM-DD'), 'fingerprint').then(() => {
        setLocalFingerprintRecord(null);
      });
    }
  };

  const handleDownloadGateFile = (): void => {
    const file = gateFile ?? localGateRecord?.fileData ?? null;
    const name = gateFile?.name ?? localGateRecord?.fileName ?? 'gate_scan.xlsx';
    if (file) downloadFile(file, name);
  };

  const handleDownloadFingerprintFile = (): void => {
    const file = fingerprintFile ?? localFingerprintRecord?.fileData ?? null;
    const name = fingerprintFile?.name ?? localFingerprintRecord?.fileName ?? 'fingerprint.xlsx';
    if (file) downloadFile(file, name);
  };

  const handleCompute = async (): Promise<void> => {
    if (!selectedDate) return;

    let sessionId = activeSession?.id;

    if (!sessionId) {
      try {
        setProcessingStatus('Creating attendance session...');
        const createRes = await createSessionMutate(selectedDate.toISOString());
        const newSession = createRes.data;
        setActiveSession(newSession);
        sessionId = newSession.id;
      } catch (err) {
        setProcessingStatus(null);
        return;
      }
    }

    // Use in-memory file or fall back to IndexedDB record
    const gateFileToUpload = gateFile ?? (localGateRecord?.fileData as File | null);
    const fingerprintFileToUpload = fingerprintFile ?? (localFingerprintRecord?.fileData as File | null);

    if (gateFileToUpload) {
      try {
        setProcessingStatus('Uploading gate-scan file...');
        await uploadGateScanMutate({ sessionId, file: gateFileToUpload });
        setGateFile(null);
        setGateRollCount(null);
      } catch (err) {
        setProcessingStatus(null);
        return;
      }
    }

    if (fingerprintFileToUpload) {
      try {
        setProcessingStatus('Uploading fingerprint file...');
        await uploadFingerprintMutate({ sessionId, file: fingerprintFileToUpload });
        setFingerprintFile(null);
        setFingerprintRollCount(null);
      } catch (err) {
        setProcessingStatus(null);
        return;
      }
    }

    try {
      setProcessingStatus('Computing attendance bucketing...');
      await computeAttendanceMutate(sessionId);
    } catch (err) {
      // Handled by hook
    } finally {
      setProcessingStatus(null);
    }
  };

  const handleConfirmRecompute = async (): Promise<void> => {
    setIsRecomputeDialogOpen(false);
    await handleCompute();
  };

  const handleSendMail = async (resultIds?: number[]): Promise<void> => {
    if (!activeSessionId) return;
    await sendMailMutate({ sessionId: activeSessionId, resultIds });
  };



  const handleUpdateResultStatus = async (resultId: number, status: string): Promise<void> => {
    const originalResults = [...localResults];
    setLocalResults((prev) =>
      prev.map((r) => (r.id === resultId ? { ...r, status: status as any } : r))
    );
    setUpdatingIds((prev) => [...prev, resultId]);

    try {
      await updateStatusMutate({ resultId, status });
    } catch (err) {
      setLocalResults(originalResults);
    } finally {
      setUpdatingIds((prev) => prev.filter((id) => id !== resultId));
    }
  };

  const handleBulkUpdateStatus = async (resultIds: number[], status: string): Promise<void> => {
    const originalResults = [...localResults];
    setLocalResults((prev) =>
      prev.map((r) => (resultIds.includes(r.id) ? { ...r, status: status as any } : r))
    );
    setUpdatingIds((prev) => [...prev, ...resultIds]);

    try {
      await bulkUpdateStatusMutate({ resultIds, status });
    } catch (err) {
      setLocalResults(originalResults);
    } finally {
      setUpdatingIds((prev) => prev.filter((id) => !resultIds.includes(id)));
    }
  };

  const isProcessing =
    isComputing ||
    isUploadingFile ||
    isCreatingSession ||
    isLoadingResults ||
    isFetchingResults ||
    processingStatus !== null;

  const hasHighSeverityIssues = localResults.some(
    (r) => r.status === 'outside_college' || r.status === 'out_of_hostel'
  );

  return (
    <Stack spacing={3} sx={{ mt: 3 }} width={1}>

      <Grid container spacing={3} alignItems="stretch">
        {/* Left Panel: Upload, Steps, Past Sessions */}
        <Grid item xs={12} md={3}>
          {/* Workflow Steps Card */}
          <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%' }}>
              <Stack spacing={2.5} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%' }}>
                <Typography variant="h6" fontWeight={600}>
                  Roll Call Workflow
                </Typography>
                <Divider />

                <DatePicker
                  label="Roll Call Date"
                  value={selectedDate}
                  format="DD-MM-YYYY"
                  onChange={(newVal) => {
                    setSelectedDate(newVal);
                  }}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      size: 'small',
                      fullWidth: true,
                    },
                  }}
                />



                {/* Step 1: Upload */}
                <AttendanceUpload
                  gateFile={gateFile}
                  gateRollCount={gateRollCount}
                  onGateFileLoaded={handleGateFileLoaded}
                  onGateFileRemoved={handleGateFileRemoved}
                  onDownloadGateFile={localGateRecord || gateFile ? handleDownloadGateFile : undefined}
                  uploadedGateFileName={!gateFile ? (localGateRecord?.fileName ?? null) : null}
                  uploadedGateFileTime={
                    !gateFile && localGateRecord?.uploadedAt
                      ? dayjs(localGateRecord.uploadedAt).format('DD-MM-YYYY hh:mm A')
                      : null
                  }
                  onClearUploadedGateFile={() => {
                    handleGateFileRemoved();
                  }}
                  fingerprintFile={fingerprintFile}
                  fingerprintRollCount={fingerprintRollCount}
                  onFingerprintFileLoaded={handleFingerprintFileLoaded}
                  onFingerprintFileRemoved={handleFingerprintFileRemoved}
                  onDownloadFingerprintFile={localFingerprintRecord || fingerprintFile ? handleDownloadFingerprintFile : undefined}
                  uploadedFingerprintFileName={!fingerprintFile ? (localFingerprintRecord?.fileName ?? null) : null}
                  uploadedFingerprintFileTime={
                    !fingerprintFile && localFingerprintRecord?.uploadedAt
                      ? dayjs(localFingerprintRecord.uploadedAt).format('DD-MM-YYYY hh:mm A')
                      : null
                  }
                  onClearUploadedFingerprintFile={() => {
                    handleFingerprintFileRemoved();
                  }}
                />

                {/* Step 2: Compute */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
                  >
                    Step 3: Compute
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={isComputing || isUploadingFile || isCreatingSession || !selectedDate}
                    onClick={() => {
                      if (localResults.length > 0) {
                        setIsRecomputeDialogOpen(true);
                      } else {
                        void handleCompute();
                      }
                    }}
                  >
                    {isComputing || isUploadingFile || isCreatingSession ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : localResults.length > 0 ? (
                      'Recompute Attendance'
                    ) : (
                      'Compute Attendance'
                    )}
                  </Button>
                </Box>

                {/* Step 3: Send Mail */}
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}
                  >
                    Step 4: Notifications
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    disabled={isSendingMails || localResults.length === 0 || !hasHighSeverityIssues}
                    onClick={() => {
                      void handleSendMail();
                    }}
                  >
                    {isSendingMails ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      'Send Mail to Parents'
                    )}
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Panel: Results Grid / Table */}
        <Grid item xs={12} md={9}>
          <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Stack spacing={2.5}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                  <Typography variant="h6" fontWeight={600}>
                    Student Status Overview
                  </Typography>
                  {activeSession && lastComputedAt && (
                    <Typography variant="caption" color="text.secondary">
                      Last computed at: {lastComputedAt}
                    </Typography>
                  )}
                </Stack>
                <Divider />

                {!activeSession && !isProcessing ? (
                  <Stack py={8} alignItems="center" justifyContent="center">
                    <Typography variant="body1" color="text.secondary">
                      No attendance computed for this date yet. Upload gate-scan file and click Compute.
                    </Typography>
                  </Stack>
                ) : isProcessing ? (
                  <Stack spacing={2.5}>
                    {processingStatus && (
                      <Alert severity="info" icon={<CircularProgress size={18} />} sx={{ alignItems: 'center' }}>
                        {processingStatus}
                      </Alert>
                    )}
                    <AttendanceTable
                      results={localResults}
                      updatingIds={updatingIds}
                      isLoading={true}
                      onUpdateStatus={handleUpdateResultStatus}
                      onBulkUpdateStatus={handleBulkUpdateStatus}
                      onSendMail={handleSendMail}
                    />
                  </Stack>
                ) : localResults.length === 0 ? (
                  <Stack py={8} alignItems="center" justifyContent="center">
                    <Typography variant="body1" color="text.secondary">
                      No results computed for this session yet. Upload scanner file and run Compute.
                    </Typography>
                  </Stack>
                ) : (
                  <AttendanceTable
                    results={localResults}
                    updatingIds={updatingIds}
                    onUpdateStatus={handleUpdateResultStatus}
                    onBulkUpdateStatus={handleBulkUpdateStatus}
                    onSendMail={handleSendMail}
                  />
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recompute Warning Dialog */}
      <Dialog
        open={isRecomputeDialogOpen}
        onClose={() => {
          setIsRecomputeDialogOpen(false);
        }}
      >
        <DialogTitle>Recompute Attendance?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Warning: Recomputing attendance will overwrite all student statuses and discard any manual
            edits you have made. Do you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsRecomputeDialogOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={() => void handleConfirmRecompute()} color="error" variant="contained">
            Continue Recompute
          </Button>
        </DialogActions>
      </Dialog>

      <SnackBarAlert msg={snack} setMsg={setSnack} />
    </Stack>
  );
}
