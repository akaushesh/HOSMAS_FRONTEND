import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';


export const navSubItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'group', title: 'Group', href: paths.dashboard.group, icon: 'users' },
  { key: 'hostels', title: 'View Hostels', href: paths.dashboard.hostels, icon: 'City' },
  { key: 'preferences', title: 'Preferences', href: paths.dashboard.preference, icon: 'list-dashes' },
  { key: 'rooms', title: 'Room Allocation', href: paths.dashboard.rooms, icon: 'room-door',disabled:true },
  { key: 'faqs', title: 'FAQs', href: paths.dashboard.faqs, icon: 'user' },
] satisfies NavItemConfig[];
  
export const navItems = [
    { key: 'allocation', title: 'Allocation', href: paths.dashboard.overview, icon: 'chart-pie', items: navSubItems,isNested:true },
    { key: 'cleaning', title: 'Cleaning', href: paths.cleaning, icon: 'broom',isNested:false},
    { key: 'laundry', title: 'Laundry', href: paths.laundry, icon: 'shirt',isNested:false},
    { key: 'settings', title: 'Settings', href: paths.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
  
