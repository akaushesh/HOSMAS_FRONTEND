import * as React from 'react';
import RouterLink from 'next/link';
import { Box, Stack, Typography } from '@mui/material';

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
        minHeight: '100%',
      }}
    >
      <Stack sx={{ alignItems: 'center',width:1 ,justifyContent: 'center', flexDirection:{xs:'column',lg:'row'} }}>
        
        <Stack
          sx={{
            height:1,
            backgroundColor: 'background.paper',
            width:{xs:1,lg:"50%"}
          }}
          alignItems="center"
        >
          <Box
            component="header"
            sx={{
              p:3,
              width: '100%',
            }}
          >
            <Box
              component={RouterLink}
              href="/"
              sx={{
                display: 'inline-flex',
                // mt:{xs:2,lg:0},
                height: { xs: '11vh', lg: '70px' },
                width: { xs: 1, lg: '220px' },
              }}
            >
              <DynamicLogo colorDark="light" colorLight="dark" height={1} width={1} />
            </Box>
          </Box>

          <Stack sx={{ alignItems: 'center', justifyContent: 'center', p:3,px:5,width:1,height:0.7,mt:{xs:2,sm:0} }}>
            <Box sx={{ width: {xs:1,lg:"450px"},maxWidth:"450px" }}>{children}</Box>
          </Stack>
        </Stack>
       
       
       
        <Stack
          sx={{
            height:1,
            alignItems: 'center',
            width:{xs:1,lg:"50%"},
            // background: "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            backgroundImage: "url('/assets/hostelM.webp')",
            color: 'white',
            display: {xs:'none',sm:'flex'},
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
                Thapar Hostel Management System
              </Box>
            </Typography>
          </Box>
        </Stack>


        <Stack
          sx={{
            height:1,
            width:1,
            alignItems: 'center',
            backgroundColor:"white",
            display: {xs:'flex',sm:'none'},
            justifyContent: 'center',
            position: 'relative',
          }}
        >
        <Stack
          sx={{
            height:1,
            width:1,
            backgroundPosition: 'center',            
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('/assets/hosmas-2.png')",
            backgroundSize: 'contain',
            position: 'relative',
            '& img': {
              maxWidth: '100%',
            },
          }}
        />
      </Stack>
      </Stack>
    </Box>
  );
}
