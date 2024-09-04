'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { authClient } from '@/lib/auth/client';

interface NewPasswordProps {
  slug: string;
}

const schema = zod.object({ password: zod.string().min(8, { message: 'Password should be atleast 8 characters' }) });

type Values = zod.infer<typeof schema>;

const defaultValues = { password: '' } satisfies Values;

export function NewPasswordForm({ slug }: NewPasswordProps): React.JSX.Element {
  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const data = {
        slug,
        password: values.password,
      };
      const { error } = await authClient.resetPassword(data);

      if (error) {
        setError('root', { type: 'server', message: error });
        setIsPending(false);
        return;
      }
      setIsPending(false);

      // Redirect to confirm password reset
    },
    [setError, slug]
  );

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Reset password</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)}>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput {...field} label="New Password" type="password" />
                {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
          <Button disabled={isPending} type="submit" variant="contained">
            Reset Password
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
