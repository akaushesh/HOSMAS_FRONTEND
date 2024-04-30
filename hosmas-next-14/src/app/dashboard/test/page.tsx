'use client';

import * as React from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { logger } from '@/lib/default-logger';
import { useResetPassword } from '@/hooks/mutation/use-auth';

// import { config } from '@/config';

// export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  // const { data } = useFaq();
  // const { data } = useGroup();
  // const { data } = useSentInvitationStatus();
  // const { data } = useReceivedInvitationStatus();
  // logger.debug('useReceivedInvitationStatus', data);

  const onSuccess = (): void => {
    logger.debug('Working');
  };
  const onError = (): void => {
    logger.error(error);
  };

  // const { mutate: login } = useLogin({ onSuccess });
  // const { mutate: retain } = useRetain({ onSuccess });
  // const { mutate: createPreferece } = useCreatePreference({ onSuccess });
  const { mutate: resetPassword, error } = useResetPassword({ onSuccess, onError });
  // const { mutate: initateResetPassword } = useInitiatePasswordReset({ onSuccess, onError });

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">API Test</Typography>
        <Button
          onClick={() => {
            // createPreferece({ order: { 1: 3, 2: 4 } });
            resetPassword({
              slug: 'moqtGWo3iiqQqDAsI7RefvVcCVEJOAdUPqOdq3fZh3qAo0yfZvTj9SG4zaKmevfpYvHFa6asrHWewH4EjSxnok6lmn32EqqMVimKKrNXEHeAPe1ikQta8MyL2UDEw7lUpiYeBWc',
              password: 'password',
            });
            // initateResetPassword({ email: 'aparmar_be21@thapar.edu' });
          }}
        >
          Click me
        </Button>
      </div>
    </Stack>
  );
}
