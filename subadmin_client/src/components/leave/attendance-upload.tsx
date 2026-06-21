'use client';

import * as React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';

interface AttendanceUploadProps {
  gateFile: File | null;
  gateRollCount: number | null;
  onGateFileLoaded: (file: File, rollCount: number | null) => void;
  onGateFileRemoved: () => void;
  onDownloadGateFile?: () => void;

  fingerprintFile: File | null;
  fingerprintRollCount: number | null;
  onFingerprintFileLoaded: (file: File, rollCount: number | null) => void;
  onFingerprintFileRemoved: () => void;
  onDownloadFingerprintFile?: () => void;

  uploadedGateFileName?: string | null;
  uploadedGateFileTime?: string | null;
  onClearUploadedGateFile?: () => void;

  uploadedFingerprintFileName?: string | null;
  uploadedFingerprintFileTime?: string | null;
  onClearUploadedFingerprintFile?: () => void;
}

/** Reusable file zone content when a file is present (either in memory or from IndexedDB). */
function FileLoadedContent({
  fileName,
  subLabel,
  subLabelColor = 'text.secondary',
  onDownload,
  onRemoveOrReupload,
  removeLabel,
}: {
  fileName: string;
  subLabel: string;
  subLabelColor?: string;
  onDownload?: () => void;
  onRemoveOrReupload?: () => void;
  removeLabel: string;
}): React.JSX.Element {
  return (
    <Stack spacing={1} width={1} alignItems="flex-start">
      {/* Filename + timestamp */}
      <Box sx={{ width: '100%' }}>
        <Typography
          variant="body2"
          fontWeight={600}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '100%',
          }}
          title={fileName}
        >
          {fileName}
        </Typography>
        <Typography variant="caption" color={subLabelColor} display="block">
          {subLabel}
        </Typography>
      </Box>
      {/* Action buttons below — never overlap */}
      <Stack direction="row" spacing={1}>
        {onDownload && (
          <Button size="small" color="primary" variant="outlined" onClick={onDownload} sx={{ py: 0.25, fontSize: '0.7rem' }}>
            Download
          </Button>
        )}
        <Button size="small" color="error" variant="outlined" onClick={onRemoveOrReupload} sx={{ py: 0.25, fontSize: '0.7rem' }}>
          {removeLabel}
        </Button>
      </Stack>
    </Stack>
  );
}

export default function AttendanceUpload({
  gateFile,
  gateRollCount,
  onGateFileLoaded,
  onGateFileRemoved,
  onDownloadGateFile,
  fingerprintFile,
  fingerprintRollCount,
  onFingerprintFileLoaded,
  onFingerprintFileRemoved,
  onDownloadFingerprintFile,
  uploadedGateFileName = null,
  uploadedGateFileTime = null,
  onClearUploadedGateFile,
  uploadedFingerprintFileName = null,
  uploadedFingerprintFileTime = null,
  onClearUploadedFingerprintFile,
}: AttendanceUploadProps): React.JSX.Element {
  const gateInputRef = React.useRef<HTMLInputElement | null>(null);
  const fingerprintInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, type: 'gate' | 'fingerprint'): void => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.name.endsWith('.xlsx')) {
      if (type === 'gate') {
        onGateFileLoaded(droppedFile, null);
      } else {
        onFingerprintFileLoaded(droppedFile, null);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'gate' | 'fingerprint'): void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.name.endsWith('.xlsx')) {
      if (type === 'gate') {
        onGateFileLoaded(selectedFile, null);
      } else {
        onFingerprintFileLoaded(selectedFile, null);
      }
    }
  };

  const hasGateFile = Boolean(gateFile || uploadedGateFileName);
  const hasFingerprintFile = Boolean(fingerprintFile || uploadedFingerprintFileName);

  const zoneStyle = (hasFile: boolean) => ({
    border: '2px dashed var(--mui-palette-divider)',
    borderRadius: 1,
    p: 1.5,
    cursor: hasFile ? 'default' : 'pointer',
    backgroundColor: 'var(--mui-palette-background-default)',
    '&:hover': {
      borderColor: hasFile ? 'var(--mui-palette-divider)' : 'var(--mui-palette-primary-main)',
    },
    transition: 'border-color 0.2s',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '90px',
  });

  return (
    <Stack spacing={2} width={1} sx={{ flexGrow: 1 }}>
      {/* Gate Scanner Upload Zone */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}>
          Step 1: Upload Gate-Scanner File
        </Typography>
        <Box
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'gate')}
          onClick={hasGateFile ? undefined : () => gateInputRef.current?.click()}
          sx={zoneStyle(hasGateFile)}
        >
          <input
            type="file"
            accept=".xlsx"
            ref={gateInputRef}
            onChange={(e) => handleFileChange(e, 'gate')}
            style={{ display: 'none' }}
          />

          {uploadedGateFileName ? (
            <FileLoadedContent
              fileName={uploadedGateFileName}
              subLabel={uploadedGateFileTime ? `Uploaded at: ${uploadedGateFileTime}` : 'Stored in browser'}
              subLabelColor={uploadedGateFileTime ? 'text.secondary' : 'success.main'}
              onDownload={onDownloadGateFile}
              onRemoveOrReupload={onClearUploadedGateFile}
              removeLabel="Re-upload"
            />
          ) : gateFile ? (
            <FileLoadedContent
              fileName={gateFile.name}
              subLabel="File loaded"
              subLabelColor="success.main"
              onDownload={onDownloadGateFile}
              onRemoveOrReupload={onGateFileRemoved}
              removeLabel="Remove"
            />
          ) : (
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="body2" fontWeight={500}>
                Drag & drop gate scanner file here
              </Typography>
              <Typography variant="caption" color="text.secondary">
                or click to browse (.xlsx only)
              </Typography>
            </Stack>
          )}
        </Box>
      </Box>

      {/* Fingerprint Scanner Upload Zone */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}>
          Step 2: Upload Fingerprint Scanner File
        </Typography>
        <Box
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'fingerprint')}
          onClick={hasFingerprintFile ? undefined : () => fingerprintInputRef.current?.click()}
          sx={zoneStyle(hasFingerprintFile)}
        >
          <input
            type="file"
            accept=".xlsx"
            ref={fingerprintInputRef}
            onChange={(e) => handleFileChange(e, 'fingerprint')}
            style={{ display: 'none' }}
          />

          {uploadedFingerprintFileName ? (
            <FileLoadedContent
              fileName={uploadedFingerprintFileName}
              subLabel={uploadedFingerprintFileTime ? `Uploaded at: ${uploadedFingerprintFileTime}` : 'Stored in browser'}
              subLabelColor={uploadedFingerprintFileTime ? 'text.secondary' : 'success.main'}
              onDownload={onDownloadFingerprintFile}
              onRemoveOrReupload={onClearUploadedFingerprintFile}
              removeLabel="Re-upload"
            />
          ) : fingerprintFile ? (
            <FileLoadedContent
              fileName={fingerprintFile.name}
              subLabel="File loaded"
              subLabelColor="success.main"
              onDownload={onDownloadFingerprintFile}
              onRemoveOrReupload={onFingerprintFileRemoved}
              removeLabel="Remove"
            />
          ) : (
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="body2" fontWeight={500}>
                Drag & drop fingerprint file here
              </Typography>
              <Typography variant="caption" color="text.secondary">
                or click to browse (.xlsx only)
              </Typography>
            </Stack>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
