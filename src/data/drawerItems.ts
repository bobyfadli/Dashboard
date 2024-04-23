import { SvgIconProps } from '@mui/material';
import Calendar from 'components/icons/Calendar';
import Car from 'components/icons/Car';
import Comment from 'components/icons/Comment';
import Doughnut from 'components/icons/Doughnut';
import Fencing from 'components/icons/Fencing';
import Grid from 'components/icons/Grid';
import Settings from 'components/icons/Settings';
import ShoppingBag from 'components/icons/ShoppingBag';
import ShoppingCart from 'components/icons/ShoppingCart';
import SignOut from 'components/icons/SignOut';

interface DrawerItem {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  href: string;
}

export const drawerItems: DrawerItem[] = [
  {
    id: 1,
    icon: Grid,
    // icon: 'radix-icons:dashboard',
    title: 'Dashboard',
    href: '#dashboard',
  },
  {
    id: 2,
    icon: Doughnut,
    // icon: 'icon-park-outline:steering-wheel',
    title: 'Assets',
    href: '#assets',
  },
  {
    id: 3,
    icon: Car,
    // icon: 'mdi:car-outline',
    title: 'Booking',
    href: '#booking',
  },
  {
    id: 4,
    icon: ShoppingBag,
    // icon: 'ic:outline-shopping-bag',
    title: 'Sell Cars',
    href: '#sell-cars',
  },
  {
    id: 5,
    icon: ShoppingCart,
    // icon: 'solar:cart-large-minimalistic-outline',
    title: 'Buy Cars',
    href: '#buy-cars',
  },
  {
    id: 6,
    icon: Fencing,
    // icon: 'material-symbols-light:design-services-outline-sharp',
    title: 'Services',
    href: '#services',
  },
  {
    id: 7,
    icon: Calendar,
    // icon: 'mdi:calendar-text',
    title: 'Calender',
    href: '#calender',
  },
  {
    id: 8,
    icon: Comment,
    // icon: 'arcticons:messages-2',
    title: 'Messages',
    href: '#messages',
  },
  {
    id: 9,
    icon: Settings,
    // icon: 'solar:settings-outline',
    title: 'Settings',
    href: '#settings',
  },
  {
    id: 10,
    icon: SignOut,
    // icon: 'solar:logout-2-outline',
    title: 'Log out',
    href: '#logout',
  },
];
