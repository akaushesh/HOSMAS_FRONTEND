'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';

import { usePopover } from '@/hooks/use-popover';

// import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

export function MainNav(): React.JSX.Element {
  // const [openNav, setOpenNav] = React.useState<boolean>(false);
  const pathname = usePathname();
  const userPopover = usePopover<HTMLDivElement>();

  const str = pathname
  .substring(1)
  .split('/')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' | ');

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(5px)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: {xs:'space-between',lg:"flex-end"}, minHeight: '64px', pr: 2,pl:1 }}
        >
          <Stack sx={{ display:{xs:'flex',lg:'none'},alignItems: 'center' }} direction="row" width={1} spacing={3} m={2}>
            <Typography variant='h6' color="var(--mui-palette-text-primary)" sx={{fontSize:"19px"}}>{str}</Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'flex-end' }} m={2}>
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="success" variant="dot">
                <IconButton>
                  <BellIcon />
                </IconButton>
              </Badge>
            </Tooltip>
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              // src="/assets/avatar.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
     
    </React.Fragment>
  );
}
