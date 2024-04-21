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

interface SidebarOption {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
}

export const sidebarOptions: SidebarOption[] = [
  {
    id: 1,
    icon: Grid,
    // icon: 'radix-icons:dashboard',
    title: 'Dashboard',
  },
  {
    id: 2,
    icon: Doughnut,
    // icon: 'icon-park-outline:steering-wheel',
    title: 'Assets',
  },
  {
    id: 3,
    icon: Car,
    // icon: 'mdi:car-outline',
    title: 'Booking',
  },
  {
    id: 4,
    icon: ShoppingBag,
    // icon: 'ic:outline-shopping-bag',
    title: 'Sell Cars',
  },
  {
    id: 5,
    icon: ShoppingCart,
    // icon: 'solar:cart-large-minimalistic-outline',
    title: 'Buy Cars',
  },
  {
    id: 6,
    icon: Fencing,
    // icon: 'material-symbols-light:design-services-outline-sharp',
    title: 'Services',
  },
  {
    id: 7,
    icon: Calendar,
    // icon: 'mdi:calendar-text',
    title: 'Calender',
  },
  {
    id: 8,
    icon: Comment,
    // icon: 'arcticons:messages-2',
    title: 'Messages',
  },
  {
    id: 9,
    icon: Settings,
    // icon: 'solar:settings-outline',
    title: 'Settings',
  },
  {
    id: 10,
    icon: SignOut,
    // icon: 'solar:logout-2-outline',
    title: 'Log out',
  },
];
