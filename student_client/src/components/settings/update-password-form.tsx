'use client';

import * as React from 'react';
import type { ErrorResponse } from '@/services/auth';
import type { OkResponse } from '@/services/profile';
import { LoadingButton } from '@mui/lab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';

import type { AxiosError, AxiosResponse } from 'axios';
import { logger } from '@/lib/default-logger';

import { useChangePassword } from '@/hooks/mutation/use-auth';
import { Alert, Snackbar } from '@mui/material';

export function UpdatePasswordForm(): React.JSX.Element {
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError('');
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setPasswordError('');
    setConfirmPasswordError('');

    logger.debug('Password', confirmPassword);

    changePassword({ password });
  };


  const ResetSnackBar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
      setSuccess('');      
      setError('');
  };

  const onSuccess = (res: AxiosResponse<OkResponse>): void => {
    logger.debug('Updated password', res);
    setSuccess('Password updated successfully');
    setPassword('');
    setConfirmPassword('');
    
  };

  const onError = (err: AxiosError<ErrorResponse>): void => {
    logger.error('Error', err);
    setError(err.response?.data.detail || 'An error occurred');
  };

  const { mutate: changePassword, isPending } = useChangePassword({ onSuccess, onError });

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 'sm' }}>
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={Boolean(passwordError)}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Confirm password</InputLabel>
              <OutlinedInput
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={Boolean(confirmPasswordError)}
              />
            </FormControl>
            {passwordError !== '' ? (
              <p style={{ color: 'red' }}>{passwordError}</p>
            ) : confirmPasswordError !== '' ? (
              <p style={{ color: 'red' }}>{confirmPasswordError}</p>
            ) : null}
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <LoadingButton loading={isPending} type="submit" variant="contained">
            Update
          </LoadingButton>
        </CardActions>
      </Card>

      <Snackbar open={error!==""|| success!==""} autoHideDuration={2500} onClose={ResetSnackBar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={ResetSnackBar} variant="filled" severity={success!=="" ? 'success' : 'error'} sx={{ width: '100%' }}>
          {success!=="" ? success : error}
        </Alert>
      </Snackbar>

    </form>
  );
}
