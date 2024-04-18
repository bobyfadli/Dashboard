interface SidebarOption {
  id: number;
  icon: string;
  title: string;
}

export const sidebarOptions: SidebarOption[] = [
  {
    id: 1,
    // icon: 'radix-icons:dashboard',
    icon: 'radix-icons:dashboard',
    title: 'Dashboard',
  },
  {
    id: 2,
    icon: 'icon-park-outline:steering-wheel',
    title: 'Assets',
  },
  {
    id: 3,
    icon: 'mdi:car-outline',
    title: 'Booking',
  },
  {
    id: 4,
    icon: 'ic:outline-shopping-bag',
    title: 'Sell Cars',
  },
  {
    id: 5,
    icon: 'solar:cart-large-minimalistic-outline',
    title: 'Buy Cars',
  },
  {
    id: 6,
    icon: 'material-symbols-light:design-services-outline-sharp',
    title: 'Services',
  },
  {
    id: 7,
    icon: 'mdi:calendar-text',
    title: 'Calender',
  },
  {
    id: 8,
    icon: 'arcticons:messages-2',
    title: 'Messages',
  },
  {
    id: 9,
    icon: 'solar:settings-outline',
    title: 'Settings',
  },
  {
    id: 10,
    icon: 'solar:logout-2-outline',
    title: 'Log out',
  },
];
