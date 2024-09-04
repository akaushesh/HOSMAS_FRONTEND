import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';

import { AuthGuard } from '@/components/auth/auth-guard';
import { Ellipse2 } from '@/components/core/ellipse';
import { MainNav } from '@/components/navbars/main-nav';
import { SideNav } from '@/components/navbars/side-nav';
import { BottomNav } from '@/components/navbars/bottom-nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <AuthGuard>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: '35%', zIndex: 0 }}>
          <Ellipse2 />
        </Box>

        {/* <Box  sx={{position:"absolute",bottom:0,left:"60%",zIndex:0}}>
          <Ellipse1/>
        </Box> */}

        <SideNav />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            pl: { lg: 'var(--SideNav-width)', zIndex: 3 },
          }}
        >
          <MainNav />

          <main>
            <Container maxWidth="xl" sx={{ py: '64px' }}>
              {children}
            </Container>
          </main>
        </Box>

        <BottomNav />

      </Box>
    </AuthGuard>
  );
}
