import * as React from 'react';
import RouterLink from 'next/link';
import { Box, Grid, Typography } from '@mui/material';

import { DynamicLogo } from '@/components/core/logo';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        minHeight: '100%',
      }}
    >
      <Grid container sx={{ flex: '1 1 auto' }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
            }}
          >
            <Box
              component={RouterLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 48,
                width: 48,
              }}
            >
              {/* <Logo /> */}
              <DynamicLogo colorDark="light" colorLight="dark" height={32} width={122} />
            </Box>
          </Box>

          <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
            <Box sx={{ maxWidth: '450px', width: '100%' }}>{children}</Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            // background: "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            backgroundImage: "url('/assets/hostelM.webp')",
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            '::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
              opacity: 0.95,
            },
            '& img': {
              maxWidth: '100%',
            },
          }}
        >
          <Box sx={{ p: 3, zIndex: 100 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1,
              }}
              variant="h1"
            >
              Welcome to{' '}
              <Box component="a" sx={{ color: '#15B79E' }}>
                Thapar Hostel Allocation System
              </Box>
            </Typography>
            {/* <Typography align="center" sx={{ mb: 3 }} variant="subtitle1"></Typography> */}
            {/* <img alt="" src="/assets/auth-illustration.svg" />
            <img alt="hostel picture" src="/assets/hostels/hostelM.webp" /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
