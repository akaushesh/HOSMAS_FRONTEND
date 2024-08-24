import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { Layout } from '@/components/auth/layout';
import { NewPasswordForm } from '@/components/auth/new-password-form';

export const metadata = { title: `Reset password | Auth | ${config.site.name}` } satisfies Metadata;

export default function Page({ params }: { params: { slug: string } }): React.JSX.Element {
  return (
    <Layout>
      <GuestGuard>
        <NewPasswordForm slug={params.slug} />
      </GuestGuard>
    </Layout>
  );
}
