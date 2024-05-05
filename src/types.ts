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

export interface DoughnutChartOption {
  series: {
    name: string;
    type: string;
    min: number;
    max: number;
    startAngle: number;
    endAngle: number;
    radius: string;
    detail: {
      formatter: (value: number) => string;
      offsetCenter: [number, number];
      fontSize: number;
      fontFamily: string;
      color: string;
    };
    progress: {
      roundCap: boolean;
      show: boolean;
      width: number;
    };
    axisLine: {
      roundCap: boolean;
      lineStyle: {
        width: number;
        color?: (string | number)[][];
      };
    };
    itemStyle: {
      color: string;
    };
    axisTick: {
      show: boolean;
    };
    splitLine: {
      show: boolean;
    };
    axisLabel: {
      show: boolean;
    };
    pointer: {
      show: boolean;
    };
    data: {
      value: number;
    }[];
  }[];
}

export interface Factor {
  id: number;
  icon: (props: SvgIconProps) => JSX.Element;
  title: string;
  iconBackground: string;
  color: string;
  chartOption: DoughnutChartOption;
}
