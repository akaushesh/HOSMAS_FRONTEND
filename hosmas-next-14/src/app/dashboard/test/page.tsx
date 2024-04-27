'use client';

import * as React from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { logger } from '@/lib/default-logger';
import { useLogin } from '@/hooks/mutation/use-auth';

// import { logger } from '@/lib/default-logger';
// import { useFaq } from '@/hooks/query/use-faq';
// import { useGroup } from '@/hooks/query/use-group';
// import { useReceivedInvitationStatus, useSentInvitationStatus } from '@/hooks/query/use-invitation';

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

  const { mutate: login } = useLogin({ onSuccess });

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">API Test</Typography>
        <Button
          onClick={() => {
            login({ email: 'smahajan1_be21@thapar.edu', password: 'password' });
          }}
        >
          Click me
        </Button>
      </div>
    </Stack>
  );
}
