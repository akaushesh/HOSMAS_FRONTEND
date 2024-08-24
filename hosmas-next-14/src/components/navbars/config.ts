import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';


export const allocationSubItems = [
  { key: 'group', title: 'Group', href: paths.allocation.group, icon: 'users' },
  { key: 'hostels', title: 'View Hostels', href: paths.allocation.hostels, icon: 'City' },
  { key: 'preferences', title: 'Preferences', href: paths.allocation.preference, icon: 'list-dashes' },
  { key: 'rooms', title: 'Room Allocation', href: paths.allocation.rooms, icon: 'room-door',disabled:true },
  { key: 'faqs', title: 'FAQs', href: paths.allocation.faqs, icon: 'user' },
] satisfies NavItemConfig[];
  
export const navItems = [
    { key: 'overview', title: 'Overview', href: paths.overview, icon: 'house',isNested:false },
    { key: 'allocation', title: 'Allocation', href: paths.allocation.default, icon: 'allocation', items: allocationSubItems,isNested:true },
    { key: 'cleaning', title: 'Cleaning', href: paths.cleaning, icon: 'broom',isNested:false},
    { key: 'laundry', title: 'Laundry', href: paths.laundry, icon: 'shirt',isNested:false},
    { key: 'settings', title: 'Settings', href: paths.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
  
