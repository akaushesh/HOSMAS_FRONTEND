'use client';

import * as React from 'react';
import { redirect, usePathname } from 'next/navigation';

import { navItems } from '../navbars/config';

export interface NavigationRestrictorProps {
  children: React.ReactNode;
}

export function NavigationRestrictor({ children }: NavigationRestrictorProps): React.JSX.Element {
  const pathname = usePathname();

  const disabledNavItems = navItems
    .filter((item) => item?.disabled || item?.items?.some((subItem) => subItem.disabled))
    .flatMap((item) => {
      const disabledItems = item.disabled ? [item.href] : [];
      const disabledSubItems = item.items?.filter((subItem) => subItem?.disabled).map((subItem) => subItem?.href) || [];

      return [...disabledItems, ...disabledSubItems];
    });

  if (disabledNavItems.some((item) => pathname.startsWith(item))) {
    redirect('/not-found');
  } else {
    return <>{children}</>;
  }
}
