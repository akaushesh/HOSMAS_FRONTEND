'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Link, List, ListItemButton, Paper, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';

import { navItems } from './config';
import { navIcons } from './nav-icons';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        '--SideNav-background': 'var(--mui-palette-common-white)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--SideNav-logo-background': 'var(--mui-palette-primary-main)',
        '--NavSubItem-color': 'var(--mui-palette-text-secondary)',
        '--NavItem-color': 'var(--mui-palette-primary-main)',
        '--NavSubItem-hover-background': 'var(--mui-palette-primary-main)',
        '--NavSubItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavSubItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavSubItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavSubItem-icon-color': 'var(--mui-palette-text-primaryChannel)',
        '--NavSubItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavSubItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        bgcolor: 'var(--SideNav-background)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: '300',
        '&::-webkit-scrollbar': { display: 'none' },
        px: 2,
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Paper
          elevation={4}
          component={RouterLink}
          href={paths.home}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Logo color="light" width={1} height={1} />
        </Paper>
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-text-secondary)' }} />

      <Box component="nav" sx={{ flex: '1 1 auto', mt: 6, px: 3 }}>
        {renderNavItems({ pathname, items: navItems })}
      </Box>

      <Divider sx={{ borderColor: 'var(--mui-palette-text-secondary)' }} />
      <Box>
        <Typography
          variant="h6"
          color="var(--mui-palette-text-primaryChannel)"
          my={3}
          mb={4}
          textAlign="center"
          fontSize={22}
        >
          Made by
          <Link href="https://www.ccstiet.com/" ml={1} color="inherit" target="_blank">
            Team HMS
          </Link>{' '}
        </Typography>
      </Box>
    </Box>
  );
}

function renderNavItems({ items, pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  return (
    <List sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {items?.map((item) => {
        const Icon = item.icon ? navIcons[item.icon] : null;
        const active = isNavItemActive({ invisible:item.invisible,disabled:item.disabled, external:item.external, href:item.href, matcher:item.matcher, pathname });
        const [open, setOpen] = React.useState(item.isNested && active);

      

        return (
          <Box key={item.key}>
            {item.isNested ? (
              <>
                <ListItemButton
                  sx={{
                    alignItems: 'center',
                    borderRadius: 1,
                    // color: 'var(--NavItem-color)',
                    color: (open || active)?'var(--NavItem-color)':'var(--NavSubItem-color)',
                    border: (open || active)?'1px solid var(--NavItem-color)':'',
                    cursor: 'pointer',
                    gap: 1,
                    p: '6px 16px',
                    position: 'relative',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'ease-in-out 200ms',
                    '&:hover': {
                      color: 'var(--NavSubItem-hover-background)',
                    },
                    ...(item.invisible && {
                      display: 'none',
                    }),
                    ...(item.disabled && {
                      pointerEvents: 'none',
                      opacity: 0.45,
                    }),
                    pl: 2,
                    mt: 1,
                  }}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
                    {Icon ? (
                      <SvgIcon
                        sx={{
                          fontSize: '1.3rem',
                        }}
                      >
                        <Icon />
                      </SvgIcon>
                    ) : null}
                  </Box>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Typography
                      component="span"
                      sx={{ color: 'inherit', fontSize: '0.9rem', fontWeight: 500, lineHeight: '28px' }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} sx={{ mt: 1, ml: 2 }} timeout="auto" unmountOnExit>
                  {renderNavSubItems({ pathname, items: item.items })}
                </Collapse>
              </>
            ) : (
              <NavItem isSub={false} pathname={pathname} {...item} />
            )}
          </Box>
        );
      })}
    </List>
  );
}

function renderNavSubItems({ items = [], pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem isSub key={key} pathname={pathname} {...item} />);

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
  isSub: boolean;
}

function NavItem({ invisible,disabled, external, href, icon, matcher, pathname, title, isSub }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;
  const router = useRouter();

  const handleRoute = (link: string): void => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <li style={{
      ...(invisible && {
        display: 'none',
      }),
    }}>
      <Box
        onClick={() => {
          const link = href!;
          handleRoute(link);
        }}
        sx={{
          mt: isSub ? 0 : 1,
          alignItems: 'center',
          borderRadius: 1,
          // border: isSub?'':'1px solid var(--NavItem-color)',
          color: 'var(--NavSubItem-color)',
          // color: isSub?'var(--NavSubItem-color)':'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: isSub?'3px 12px':'6px 16px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          transition: 'ease-in-out 200ms',
          '&:hover': {
            // transform: 'scale(1.005)',
            color: !active && !disabled ? 'var(--NavSubItem-hover-background)' : '',
          },
          ...(disabled && {
            pointerEvents: 'none',
            opacity: 0.45,
          }),
          ...(active && { bgcolor: 'var(--NavSubItem-active-background)', color: 'var(--NavSubItem-active-color)' }),
          pl: 2,
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <SvgIcon
              sx={{
                fontSize: isSub?'1.19rem':'1.3rem',
              }}
            >
              <Icon />
            </SvgIcon>
          ) : null}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: isSub?'0.8rem':'0.9rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
