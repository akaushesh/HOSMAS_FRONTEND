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
import { HamBurger } from './hamburger-nav';

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
        const Icon = item.icon ? navIcons[item.icon] : null;
        const [open, setOpen] = React.useState(false);
        const active = isNavItemActive({ disabled:item.disabled, external:item.external, href:item.href, matcher:item.matcher, pathname });

        return (
          <Box key={item.key}>
              <NavItem items={item.items} isNested={item.isNested} pathname={pathname} {...item} />
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

function NavItem({ disabled, external, href, icon, matcher, pathname, title ,isNested,items }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;
  const router = useRouter();

  const [openNav, setOpenNav] = React.useState(false);

  const handleClick = () => {
    if(isNested){
        if(!openNav) setOpenNav(true);
    }
    else{
        const link = href!;
        if (link) {
            router.push(link);
        }
    }
  }

  return (
    <li>
      <Box
        onClick={handleClick}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavSubItem-color)',
          cursor: 'pointer',
          display: 'flex',
          gap: 1,
          p:'6px ',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
              pointerEvents: 'none',
              opacity: 0.45,
            }),
            ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
            transition: 'ease-in-out 200ms',
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
          {Icon ? (
            <SvgIcon
              sx={{
                display:"flex",
                alignItems: 'center',
                justifyContent: 'center',
                fontSize:'1.5rem',
                color:active?'var(--NavItem-icon-active-color)':'var(--NavItem-icon-color)',
                transition: 'ease-in-out 200ms',
              }}
            >
              <Icon />
            </SvgIcon>
          ) : null}
        </Box>
       
        {(active||openNav)&&(
         
          <Box 
              sx={{transition: 'ease-in-out 200ms',}}
          >
            <Typography
              sx={{ 
                color:active?'var(--NavItem-icon-active-color)':'var(--NavItem-icon-color)',
                transition: 'ease-in-out 200ms',
               }}
            >
              {title}
            </Typography>
          </Box>
        )}

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
