import { SvgIconProps } from '@mui/material';

interface Item {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  href: string;
}

export interface DrawerItem extends Item {
  collapsible: boolean;
  subList?: Item[];
}
