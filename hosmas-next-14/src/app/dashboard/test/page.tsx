'use client';

import * as React from 'react';
// import { getProfile, changePassword } from '@/services/profile';
// import { searchStudent, transferOwnersip, getGroup, leaveGroup } from '@/services/group';
// import { getInvitations, getSentInvitationStatus, sendInvitation, acceptInvitation, deleteInvitation } from '@/services/invitation';
// import { getAllLevels, getChoices, getPreferences, getPreferenceStatus } from '@/services/preference';
// import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// import { config } from '@/config';

// export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  // React.useEffect(() => {
  //   const asyncGetProfile = async () => {
  //     await deleteInvitation({ id: 21 });
  //   };

  //   asyncGetProfile();
  // }, []);

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">API Test</Typography>
      </div>
    </Stack>
  );
}
