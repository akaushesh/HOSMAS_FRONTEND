import type { NavItemConfig } from '@/types/nav';

export function isNavItemActive({
  disabled,
  invisible,
  external,
  href,
  pathname,
}: Pick<NavItemConfig, 'invisible' | 'disabled' | 'external' | 'href' | 'matcher'> & { pathname: string }): boolean {
  if (disabled || !href || external || invisible) {
    return false;
  }
  
  if (pathname.startsWith(`${href}/`)) {
    return true;
  }
  return pathname===href;
}
