'use client';

import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, Stack, TextField, Typography } from '@mui/material';

export interface ComplaintProps {
  title: string;
  description: string;
  attachment: string[];
}

export default function Complaint(): React.JSX.Element {
  const [complaint, setComplaint] = React.useState<ComplaintProps>({
    title: '',
    description: '',
    attachment: [],
  });

  const [files, setFiles] = React.useState<FileList | null>(null);

  const handleComplaint = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setComplaint({ ...complaint, [event.target.name]: event.target.value });
  };

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

  const handleReset = (): void => {
    setComplaint({ title: '', description: '', attachment: [] });
    setFiles(null);
  };

  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      <TextField
        id="outlined-title"
        label="Title"
        variant="outlined"
        name="title"
        value={complaint.title}
        onChange={handleComplaint}
        fullWidth
       
      />

      <TextField
        id="outlined-description"
        label="Description"
        variant="outlined"
        name="description"
        value={complaint.description}
        onChange={handleComplaint}
        multiline
        rows={10}
        fullWidth
      />

      <label htmlFor="file-input" style={{ display: 'flex', alignItems: 'flex-end' }} id="file-label">
	  <Button
        variant="outlined"
        sx={{
          px: 4,
          fontSize: '16px',
          borderWidth: files?'2px':'1px',
          borderRadius: 0.8,
          py: 0.6,
          borderColor: files ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-secondary-main)',
          color: files ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-secondary-dark)',
          '&:hover': {
            borderColor: files ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-secondary-main)',
          borderWidth: files?'2px':'1px',
            backgroundColor: 'transparent', 
          },
        }}
        startIcon={<AddIcon />}
        component="span"
      >
          Attach Files
        </Button>

        <Typography variant="body2" sx={{ color: 'gray', ml: 2, mb: '2px', fontSize: '16px' }}>
          {files ? `${String(files?.length)} files selected` : ''}
        </Typography>

        <input id="file-input" type="file" onChange={handleFile} multiple style={{ display: 'none' }} />
      </label>

      <Divider />

      <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
        <Button
          onClick={() => {
            handleReset();
          }}
          sx={{
            fontWeight: 600,
            borderRadius: 1,
            px: 5,
            background: 'var(--mui-palette-secondary-dark)',
            color: 'var(--mui-palette-common-white)',
            '&:hover': { background: 'var(--mui-palette-secondary-main)' },
          }}
          variant="contained"
        >
          Reset
        </Button>
        <LoadingButton
          variant="contained"
          //   onClick={() => {
          //     handleSubmit();
          //   }}
          //   loading={isDisabled}
          disabled={complaint.title === '' || complaint.description === ''}
          sx={{
            fontWeight: 600,
            borderRadius: 1,
            px: 5,
          }}
        >
          Submit
        </LoadingButton>
      </Stack>
    </Stack>
  );
}
