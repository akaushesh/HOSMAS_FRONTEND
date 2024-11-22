import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';


export const allocationSubItems = [
  { key: 'group', title: 'Group', href: paths.allocation.group, icon: 'users' },
  { key: 'hostels', title: 'View Hostels', href: paths.allocation.hostels, icon: 'City' ,invisible:true},
  { key: 'preferences', title: 'Preferences', href: paths.allocation.preference, icon: 'list-dashes',invisible:true },
  { key: 'rooms', title: 'Room Allocation', href: paths.allocation.rooms, icon: 'room-door',disabled:true },
  { key: 'faqs', title: 'FAQs', href: paths.allocation.faqs, icon: 'user' },
] satisfies NavItemConfig[];

export const cleaningSubItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.cleaning.dashboard, icon: 'users' },
  { key: 'attendance', title: 'Attendance', href: paths.cleaning.attendance, icon: 'userList'},
  { key: 'assignment', title: 'Assignment', href: paths.cleaning.assignment, icon: 'ListChecks' },
] satisfies NavItemConfig[];

export const messSubItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.mess.dashboard, icon: 'chart-pie' },
  { key: 'menu', title: 'Menu', href: paths.mess.menu, icon: 'hamburger'},
  { key: 'feedback', title: 'Feedback', href: paths.mess.feedback, icon: 'users'},
] satisfies NavItemConfig[];
  
export const navItems = [
    { key: 'overview', title: 'Overview', href: paths.overview, icon: 'house',isNested:false },
    { key: 'allocation', title: 'Allocation', href: paths.allocation.default, icon: 'allocation', items: allocationSubItems,isNested:true },
    { key: 'cleaning', title: 'Cleaning', href: paths.cleaning.default, icon: 'broom',isNested:true,items:cleaningSubItems},
    { key: 'cleaners', title: 'Cleaners', href: paths.cleaners, icon: 'shirt',isNested:false,invisible:false},
    { key: 'laundry', title: 'Laundry', href: paths.laundry, icon: 'shirt',isNested:false},
    { key: 'mess', title: 'Mess', href: paths.mess.default, icon: 'cookingPot', isNested: true,items:messSubItems,invisible:false  },
    { key: 'settings', title: 'Settings', href: paths.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
  
