interface Factor {
  id: number;
  icon: string;
  title: string;
  value: string;
}

export const factors: Factor[] = [
  {
    id: 1,
    icon: 'material-symbols:electric-bolt-rounded',
    title: 'Energy',
    value: '45',
  },
  {
    id: 2,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Range',
    value: '157k',
  },
  {
    id: 3,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Break fluid',
    value: '9',
  },
  {
    id: 4,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Tire Wear',
    value: '25',
  },
];
