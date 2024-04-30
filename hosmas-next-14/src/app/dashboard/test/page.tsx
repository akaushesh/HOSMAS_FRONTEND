'use client';

import * as React from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { AxiosError } from 'axios';

import { logger } from '@/lib/default-logger';
import { useCreatePreference } from '@/hooks/mutation/use-preference';

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
  const onError = (error: AxiosError): void => {
    logger.error(error);
  };

  // const { mutate: login } = useLogin({ onSuccess });
  // const { mutate: retain } = useRetain({ onSuccess });
  const { mutate: createPreferece } = useCreatePreference({ onSuccess, onError });
  // const { mutate: resetPassword } = useResetPassword({ onSuccess, onError });
  // const { mutate: initateResetPassword } = useInitiatePasswordReset({ onSuccess, onError });

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">API Test</Typography>
        <Button
          onClick={() => {
            // createPreferece({ order: { 1: 3, 2: 4 } });
            createPreferece({ order: { 1: 3, 2: 4 } });
            // initateResetPassword({ email: 'aparmar_be21@thapar.edu' });
          }}
        >
          Click me
        </Button>
      </div>
    </Stack>
  );
}
