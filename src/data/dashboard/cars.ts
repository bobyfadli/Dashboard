import { theme } from 'theme/theme';

interface Car {
  id: number;
  percentage: number;
  title: string;
  price: number;
  speed: number;
  backgroundColor: string;
}

export const cars: Car[] = [
  {
    id: 1,
    percentage: 64,
    title: 'Mini Cooper',
    price: 132,
    speed: 32,
    backgroundColor: theme.palette.warning.lighter,
  },
  {
    id: 2,
    percentage: 74,
    title: 'Porsche 911 Carrera',
    price: 130,
    speed: 28,
    backgroundColor: theme.palette.primary.lighter,
  },
  {
    id: 3,
    percentage: 74,
    title: 'Porsche 911 Carrera',
    price: 130,
    speed: 28,
    backgroundColor: theme.palette.error.lighter,
  },
];
