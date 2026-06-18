import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const cleaningSubItems: NavItemConfig[] = [
  { key: 'dashboard', title: 'Dashboard', href: paths.cleaning.dashboard, icon: 'users' },
  { key: 'attendance', title: 'Attendance', href: paths.cleaning.attendance, icon: 'userList'},
  { key: 'assignment', title: 'Assignment', href: paths.cleaning.assignment, icon: 'ListChecks' },
  { key: 'add-worker', title: 'Add Worker', href: paths.cleaning.addWorker, icon: 'plus' },
];

export const messSubItems: NavItemConfig[] = [
  { key: 'dashboard', title: 'Dashboard', href: paths.mess.dashboard, icon: 'chart-pie' },
  { key: 'menu', title: 'Menu', href: paths.mess.menu, icon: 'hamburger' },
  { key: 'feedback', title: 'Feedback', href: paths.mess.feedback, icon: 'users'},
  { key: 'menu-items', title: 'Menu Items', href: paths.mess.items, icon: 'list-dashes'},
];
  
export const leaveSubItems: NavItemConfig[] = [
  { key: 'dashboard', title: 'Dashboard', href: paths.leave.dashboard, icon: 'chart-pie' },
  { key: 'records', title: 'Records', href: paths.leave.records, icon: 'ListChecks' },
];

export const navItems: NavItemConfig[] = [
    { key: 'overview', title: 'Overview', href: paths.overview, icon: 'chart-pie',isNested:false },
    { key: 'cleaning', title: 'Cleaning', href: paths.cleaning.default, icon: 'broom',isNested:true,items:cleaningSubItems,},
    { key: 'laundry', title: 'Laundry', href: paths.laundry, icon: 'shirt',isNested:false},
    { key: 'mess', title: 'Mess', href: paths.mess.default, icon: 'cookingPot', isNested: true,items:messSubItems,  },
    { key: 'leave', title: 'Leave', href: paths.leave.default, icon: 'house', isNested: true,items:leaveSubItems,invisible:false  },
    { key: 'settings', title: 'Settings', href: paths.settings, icon: 'gear-six' },
];

  

