import { SvgIconProps } from '@mui/material';
import { EChartsOption } from 'echarts-for-react';

interface Item {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  href?: string;
}

export interface SubItem {
  id: number;
  title: string;
  href: string;
}

export interface DrawerItem extends Item {
  collapsible: boolean;
  subList?: SubItem[];
}

export interface IFactor {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  iconBackground: string;
  color: string;
  chartOption: EChartsOption;
}

export interface ICar {
  id: number;
  percentage: number;
  title: string;
  price: number;
  speed: number;
  backgroundColor: string;
}
