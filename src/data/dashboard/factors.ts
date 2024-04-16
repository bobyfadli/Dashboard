interface Factor {
  id: number;
  icon: string;
  title: string;
  percentage: string;
}

export const factors: Factor[] = [
  {
    id: 1,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Energy',
    percentage: '45',
  },
  {
    id: 2,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Range',
    percentage: '157k',
  },
  {
    id: 3,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Break fluid',
    percentage: '9',
  },
  {
    id: 4,
    icon: 'material-symbols:attach-money-rounded',
    title: 'Tire Wear',
    percentage: '25',
  },
];
