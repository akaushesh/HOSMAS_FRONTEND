'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

interface NewPasswordProps {
  slug: string;
}

const schema = zod
  .object({
    password: zod.string().min(8, 'Password should be at least 8 characters'),
    confirmPassword: zod.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormValues = zod.infer<typeof schema>;

const defaultValues: FormValues = {
  password: '',
  confirmPassword: '',
};

export function NewPasswordForm({ slug }: NewPasswordProps): React.JSX.Element {
  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = React.useCallback(
    async (values: FormValues): Promise<void> => {
      setIsPending(true);
      const data = {
        slug,
        password: values.password,
      };
      const { error } = await authClient.resetPassword(data);
      if (error) {
        setError('root', { type: 'server', message: error });
      } else {
        // Clear form inputs
        reset(defaultValues);
        // Redirect to confirm password reset
        logger.debug('Password reset successfully');
      }
      setIsPending(false);
    },
    [setError, slug, reset]
  );

  return (
    <Stack spacing={4} maxWidth="400px" margin="auto">
      <Typography variant="h5">Reset password</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                label="New Password"
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                fullWidth
                autoComplete="new-password"
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                type="password"
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword?.message}
                fullWidth
                autoComplete="new-password"
              />
            )}
          />
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
          <Button disabled={isPending} type="submit" variant="contained" fullWidth>
            Reset Password
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
