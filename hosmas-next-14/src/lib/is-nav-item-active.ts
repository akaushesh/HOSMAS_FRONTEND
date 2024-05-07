import type { NavItemConfig } from '@/types/nav';
import path from 'path';

export function isNavItemActive({
  disabled,
  external,
  href,
  matcher,
  pathname,
}: Pick<NavItemConfig, 'disabled' | 'external' | 'href' | 'matcher'> & { pathname: string }): boolean {
  if (disabled || !href || external) {
    return false;
  }
  

  if (pathname.startsWith(`${href}/`)&&href!=='/dashboard') {
    return true;
  }
  return pathname==href;
}
