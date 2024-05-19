import Authentication from 'components/icons/Drawer/Authentication';
import Calendar from 'components/icons/Drawer/Calendar';
import Car from 'components/icons/Drawer/Car';
import Comment from 'components/icons/Drawer/Comment';
import Doughnut from 'components/icons/Drawer/Doughnut';
import Fencing from 'components/icons/Drawer/Fencing';
import Grid from 'components/icons/Drawer/Grid';

import Settings from 'components/icons/Drawer/Settings';
import ShoppingBag from 'components/icons/Drawer/ShoppingBag';
import ShoppingCart from 'components/icons/Drawer/ShoppingCart';
import SignOut from 'components/icons/Drawer/SignOut';
import paths, { rootPaths } from 'routes/paths';
import { DrawerItem } from 'types/types';

export const drawerItems: DrawerItem[] = [
  {
    id: 1,
    icon: Grid,
    title: 'Dashboard',
    href: rootPaths.root,
    collapsible: false,
  },
  {
    id: 9,
    icon: Authentication,
    title: 'Authentication',
    collapsible: true,
    subList: [
      { id: 21, title: 'Login', href: paths.login },
      { id: 22, title: 'Sign Up', href: paths.signup },
    ],
  },

  {
    id: 2,
    icon: Doughnut,
    title: 'Assets',
    // href: paths.assets,
    href: '#!',
    collapsible: false,
  },
  {
    id: 3,
    icon: Car,
    title: 'Booking',
    // href: paths.booking,
    href: '#!',
    collapsible: false,
  },
  {
    id: 4,
    icon: ShoppingBag,
    title: 'Sell Cars',
    // href: paths.sellCars,
    href: '#!',
    collapsible: false,
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: 'Buy Cars',
    // href: paths.buyCars,
    href: '#!',
    collapsible: false,
  },
  {
    id: 6,
    icon: Fencing,
    title: 'Services',
    // href: paths.services,
    href: '#!',
    collapsible: false,
  },
  {
    id: 7,
    icon: Calendar,
    title: 'Calender',
    // href: paths.calendar,
    href: '#!',
    collapsible: false,
  },
  {
    id: 8,
    icon: Comment,
    title: 'Messages',
    // href: paths.messages,
    href: '#!',
    collapsible: false,
  },
  {
    id: 10,
    icon: Settings,
    title: 'Settings',
    // href: paths.settings,
    href: '#!',
    collapsible: false,
  },
  {
    id: 11,
    icon: SignOut,
    title: 'Log out',
    // href: paths.logout,
    href: '#!',
    collapsible: false,
  },
];
