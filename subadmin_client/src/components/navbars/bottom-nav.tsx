'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { NavItemConfig } from '@/types/nav';
import { isNavItemActive } from '@/lib/is-nav-item-active';

import { navItems } from './config';
import { HamBurger } from './hamburger-nav';
import { navIcons } from './nav-icons';

export function BottomNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        '--BottomNav-background': 'var(--mui-palette-common-white)',
        '--BottomNav-border': '#e3e3e3',
        '--BottomNav-color': 'var(--mui-palette-common-white)',
        '--BottomNav-logo-background': 'var(--mui-palette-primary-main)',
        '--NavSubItem-color': 'var(--mui-palette-text-secondary)',
        '--NavItem-color': 'var(--mui-palette-primary-main)',
        '--NavItem-icon-color': '#8696BB',
        '--NavItem-icon-active-color': 'var(--mui-palette-primary-main)',
        '--NavItem-active-background': '#FFF0F0',
        '--NavSubItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavSubItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavSubItem-icon-color': 'var(--mui-palette-text-primaryChannel)',
        '--NavSubItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavSubItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        borderTop: '1px solid var(--BottomNav-border)',
        bgcolor: 'var(--BottomNav-background)',
        color: 'var(--BottomNav-color)',
        display: { xs: 'flex', lg: 'none' },
        height: '8vh',
        alignItems: 'center',
        width: 1,
        position: 'fixed',
        bottom: 0,
        zIndex: '300',
        transition: 'ease-in-out 200ms',
      }}
    >
      {renderNavItems({ pathname, items: navItems })}
    </Box>
  );
}

function renderNavItems({ items, pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        p: 0,
        m: 0,
        listStyle: 'none',
        width: 1,
        transition: 'ease-in-out 200ms',
      }}
    >
      {items?.map((item) => {
        const { key, ...restItem } = item;
        return (
          <Box
            key={key}
            sx={{
              ...(restItem.invisible && {
                display: 'none',
              }),
            }}
          >
            <NavItem items={restItem.items} isNested={restItem.isNested} pathname={pathname} {...restItem} />
          </Box>
        );
      })}
    </Box>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
  items?: NavItemConfig[];
}

function NavItem({
  invisible,
  disabled,
  external,
  href,
  icon,
  matcher,
  pathname,
  title,
  isNested,
  items,
}: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;
  const router = useRouter();

  const [openNav, setOpenNav] = React.useState(false);

  const handleClick = (): void => {
    if (isNested) {
      if (!openNav) setOpenNav(true);
    } else {
      const link = href!;
      if (link) {
        router.push(link);
      }
    }
  };

  return (
    <li
      style={{
        ...(invisible && {
          display: 'none',
        }),
      }}
    >
      <Box
        onClick={handleClick}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavSubItem-color)',
          cursor: 'pointer',
          display: 'flex',
          gap: '2px',
          p: '6px ',
          position: 'relative',
          textDecoration: 'none',
          ...(disabled && {
            pointerEvents: 'none',
            opacity: 0.45,
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
          transition: 'ease-in-out 200ms',
        }}
      >
        <Box>
          {Icon ? (
            <SvgIcon
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p:active?'3px':'1px',
                color: active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)',
                transition: 'ease-in-out 200ms',
              }}
            >
              <Icon weight={active ? 'fill' : 'regular'} />
            </SvgIcon>
          ) : null}
        </Box>

        {active || openNav ? (
          <Box sx={{ transition: 'ease-in-out 200ms' }}>
            <Typography
              sx={{
                color: active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)',
                transition: 'ease-in-out 200ms',
                fontSize: '14px',
              }}
            >
              {title}
            </Typography>
          </Box>
        ) : null}

        <HamBurger
          onClose={() => {
            setOpenNav(false);
          }}
          open={openNav}
          items={items}
          title={title}
        />
      </Box>
    </li>
  );
}
