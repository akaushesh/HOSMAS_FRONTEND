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

export function UpdatePasswordForm(): React.JSX.Element {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

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
      setPasswordError('Password must be at least 8 characters');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match");
      return;
    }

    setPasswordError('');
    setConfirmPasswordError('');

    logger.debug('Password', confirmPassword);

    changePassword({ password });
  };

  const onSuccess = (res: AxiosResponse<OkResponse>): void => {
    logger.debug('Updated password', res);
  };

  const onError = (err: AxiosError<ErrorResponse>): void => {
    logger.error('Error', err);
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
    </form>
  );
}
