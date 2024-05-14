import { SvgIconProps } from '@mui/material';
import Authentication from 'components/icons/Authentication';
import Calendar from 'components/icons/Calendar';
import Car from 'components/icons/Car';
import Comment from 'components/icons/Comment';
import Doughnut from 'components/icons/Doughnut';
import Fencing from 'components/icons/Fencing';
import Grid from 'components/icons/Grid';
import Login from 'components/icons/Login';

import Settings from 'components/icons/Settings';
import ShoppingBag from 'components/icons/ShoppingBag';
import ShoppingCart from 'components/icons/ShoppingCart';
import SignOut from 'components/icons/SignOut';

interface DrawerItem {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  href: string;
  collapsible: boolean;
  subList?: {
    id: number;
    icon: (props: SvgIconProps) => JSX.Element;
    title: string;
    href: string;
  }[];
}

export const drawerItems: DrawerItem[] = [
  {
    id: 1,
    icon: Grid,
    title: 'Dashboard',
    href: '#!',
    collapsible: false,
  },
  {
    id: 9,
    icon: Authentication,
    title: 'Authentication',
    href: '#!',
    collapsible: true,
    subList: [
      { id: 21, icon: Login, title: 'Login', href: '/authentication/login' },
      { id: 22, icon: Authentication, title: 'Sign Up', href: '/authentication/sign-up' },
    ],
  },

  {
    id: 2,
    icon: Doughnut,
    title: 'Assets',
    href: '#!',
    collapsible: false,
  },
  {
    id: 3,
    icon: Car,
    title: 'Booking',
    href: '#!',
    collapsible: false,
  },
  {
    id: 4,
    icon: ShoppingBag,
    title: 'Sell Cars',
    href: '#!',
    collapsible: false,
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: 'Buy Cars',
    href: '#!',
    collapsible: false,
  },
  {
    id: 6,
    icon: Fencing,
    title: 'Services',
    href: '#!',
    collapsible: false,
  },
  {
    id: 7,
    icon: Calendar,
    title: 'Calender',
    href: '#!',
    collapsible: false,
  },
  {
    id: 8,
    icon: Comment,
    title: 'Messages',
    href: '#!',
    collapsible: false,
  },
  {
    id: 10,
    icon: Settings,
    title: 'Settings',
    href: '#!',
    collapsible: false,
  },
  {
    id: 11,
    icon: SignOut,
    title: 'Log out',
    href: '#!',
    collapsible: false,
  },
];
