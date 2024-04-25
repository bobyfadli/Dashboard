import { SvgIconProps } from '@mui/material';
import Blood from 'components/icons/Blood';
import Lightning from 'components/icons/Lightning';
import Range from 'components/icons/Range';
import Tier from 'components/icons/Tier';

interface Factor {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  value: number;
}

export const factors: Factor[] = [
  {
    id: 1,
    icon: Lightning,
    title: 'Energy',
    value: 45,
  },
  {
    id: 2,
    icon: Range,
    title: 'Range',
    value: 157,
  },
  {
    id: 3,
    icon: Blood,
    title: 'Break fluid',
    value: 9,
  },
  {
    id: 4,
    icon: Tier,
    title: 'Tire Wear',
    value: 25,
  },
];
