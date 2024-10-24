'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Link, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';

import { navIcons } from './nav-icons';

export interface HamBurgerProps {
  onClose?: () => void;
  open?: boolean;
  items?: NavItemConfig[];
  title?: string;
}

export function HamBurger({ open, onClose, items, title }: HamBurgerProps): React.JSX.Element {
  const pathname = usePathname();
  return (
    <Drawer
      PaperProps={{
        sx: {
          '--HamBurger-background': 'var(--mui-palette-common-white)',
          '--HamBurger-color': 'var(--mui-palette-common-white)',
          '--HamBurger-logo-background': 'var(--mui-palette-primary-main)',
          '--NavItem-color': 'var(--mui-palette-text-secondary)',
          '--NavItem-hover-background': 'var(--mui-palette-primary-main)',
          '--NavItem-active-background': 'var(--mui-palette-primary-main)',
          '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
          '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
          '--NavItem-icon-color': 'var(--mui-palette-text-primaryChannel)',
          '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
          '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
          bgcolor: 'var(--HamBurger-background)',
          color: 'var(--HamBurger-color)',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          width: 'var(--HamBurger-width)',
          zIndex: 'var(--HamBurger-zIndex)',
          '&::-webkit-scrollbar': { display: 'none' },
          px: 2,
        },
      }}
      onClose={onClose}
      open={open}
    >
      <Stack spacing={2} sx={{ p: 3, py: 4 }}>
        <Paper
          elevation={6}
          component={RouterLink}
          href={paths.home}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Logo color="light" height={0.8} width={0.8} />
        </Paper>
      </Stack>

      <Divider sx={{ borderColor: 'var(--mui-palette-text-secondary)' }} />

      <Box sx={{ my: 3 }}>
        <Typography color="var(--mui-palette-text-primaryChannel)" ml={4} letterSpacing="3px" variant="h5">
          {title}
        </Typography>
      </Box>

      <Box component="nav" sx={{ flex: '1 1 auto', px: 3, mt: 1 }}>
        {renderNavItems({ pathname, items })}
      </Box>

      <Divider sx={{ borderColor: 'var(--mui-palette-text-secondary)' }} />
      <Box>
        <Typography
          variant="h6"
          color={'var(--mui-palette-text-primaryChannel)'}
          my={3}
          mb={4}
          textAlign={'center'}
          fontSize={22}
        >
          Made by
          <Link href="https://www.ccstiet.com/" ml={1} color="inherit" target="_blank">
            Team CCS
          </Link>{' '}
        </Typography>
      </Box>
    </Drawer>
  );
}

function renderNavItems({ items = [], pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem key={key} pathname={pathname} {...item} />);

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <li>
      <Box
        {...(href
          ? {
              component: external ? 'a' : RouterLink,
              href,
              target: external ? '_blank' : undefined,
              rel: external ? 'noreferrer' : undefined,
            }
          : { role: 'button' })}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: '6px 16px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(disabled && {
            pointerEvents: 'none',
            opacity: 0.45,
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
