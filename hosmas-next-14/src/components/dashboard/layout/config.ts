import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'group', title: 'Group', href: paths.dashboard.group, icon: 'users' },
  { key: 'hostels', title: 'View Hostels', href: paths.dashboard.hostels, icon: 'City' },
  { key: 'preferences', title: 'Preferences', href: paths.dashboard.preference, icon: 'list-dashes' },
  { key: 'rooms', title: 'Room Allocation', href: paths.dashboard.rooms, icon: 'room-door' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'faqs', title: 'FAQs', href: paths.dashboard.faqs, icon: 'user' },
] satisfies NavItemConfig[];
