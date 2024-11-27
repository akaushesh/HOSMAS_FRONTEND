import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

type NavItems = Item[];

interface Item {
  key: string;
  title: string;
  href: string;
  icon: string;
  disabled?: boolean;
  invisible?: boolean;
}

export const allocationSubItems: NavItems = [
  { key: 'group', title: 'Group', href: paths.allocation.group, icon: 'users' },
  { key: 'hostels', title: 'View Hostels', href: paths.allocation.hostels, icon: 'City', invisible: true },
  { key: 'preferences', title: 'Preferences', href: paths.allocation.preference, icon: 'list-dashes' },
  { key: 'rooms', title: 'Room Allocation', href: paths.allocation.rooms, icon: 'room-door', disabled: false },
  { key: 'faqs', title: 'FAQs', href: paths.allocation.faqs, icon: 'user' },
] satisfies NavItemConfig[];

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.overview, icon: 'overview', isNested: false },
  {
    key: 'allocation',
    title: 'Allocation',
    href: paths.allocation.default,
    icon: 'allocation',
    items: allocationSubItems,
    isNested: true,
  },
  { key: 'cleaning', title: 'Cleaning', href: paths.cleaning, icon: 'broom', isNested: false },
  { key: 'laundry', title: 'Laundry', href: paths.laundry, icon: 'shirt', isNested: false },
  { key: 'mess', title: 'Mess', href: paths.mess, icon: 'cookingPot', isNested: false },
  { key: 'leave', title: 'Leave', href: paths.leave, icon: 'house', isNested: false },
  { key: 'settings', title: 'Settings', href: paths.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
