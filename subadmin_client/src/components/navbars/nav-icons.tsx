import { Buildings, CalendarCheck, CirclesThreePlus, CookingPot, DoorOpen, Hamburger, House, ListChecks, ListDashes, Plus, ShirtFolded, UserList } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { Broom } from '@phosphor-icons/react/dist/ssr';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  City: Buildings,
  'list-dashes': ListDashes,
  'room-door': DoorOpen,
  'x-square': XSquare,
  broom: Broom,
  allocation: CirclesThreePlus,
  shirt: ShirtFolded,
  house: House,
  cookingPot: CookingPot,
  user: UserIcon,
  hamburger: Hamburger,
  users: UsersIcon,
  ListChecks,
  userList: UserList,
  plus: Plus,
  calendarCheck: CalendarCheck,
} as Record<string, Icon>;
