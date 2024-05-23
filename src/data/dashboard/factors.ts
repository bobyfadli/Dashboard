import { useTheme } from '@mui/material';
import Blood from 'components/icons/Factor/Blood';
import Lightning from 'components/icons/Factor/Lightning';
import Range from 'components/icons/Factor/Range';
import Tier from 'components/icons/Factor/Tier';
import { IFactor } from 'types/types';

export const getFactorsData = () => {
  const theme = useTheme();

  const factors: IFactor[] = [
    {
      id: 1,
      icon: Lightning,
      title: 'Energy',
      color: theme.palette.primary.main,
      chartOption: {
        series: [
          {
            name: 'energy',
            type: 'gauge',
            min: 0,
            max: 100,
            startAngle: 220,
            endAngle: -35,
            radius: '100%',
            detail: {
              formatter: (value: number) => {
                if (value < 100) return `${value}%`;
                else return `${value}k`;
              },
              offsetCenter: [0, 0],
              fontSize: theme.typography.fontSize + 10,
              fontFamily: theme.typography.fontFamily?.split(',')[0],
            },
            progress: { roundCap: true, show: true, width: 10 },
            axisLine: {
              roundCap: true,
              lineStyle: { width: 10 },
            },
            itemStyle: {},
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            data: [{ value: 45 }],
          },
        ],
      },
    },
    {
      id: 2,
      icon: Range,
      title: 'Range',
      color: theme.palette.error.light,
      chartOption: {
        series: [
          {
            name: 'range',
            type: 'gauge',
            min: 0,
            max: 340,
            startAngle: 220,
            endAngle: -35,
            radius: '100%',
            detail: {
              formatter: (value: number) => {
                if (value < 100) return `${value}%`;
                else return `${value}k`;
              },
              offsetCenter: [0, 0],
              fontSize: theme.typography.fontSize + 10,
              fontFamily: theme.typography.fontFamily?.split(',')[0],
            },
            progress: {
              roundCap: true,
              show: true,
              width: 10,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            itemStyle: {},
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            data: [
              {
                value: 157,
              },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      icon: Blood,
      title: 'Break Fluid',
      color: theme.palette.secondary.main,
      chartOption: {
        series: [
          {
            name: 'break fluid',
            type: 'gauge',
            min: 0,
            max: 100,
            startAngle: 220,
            endAngle: -35,
            radius: '100%',
            detail: {
              formatter: (value: number) => {
                if (value < 100) return `${value}%`;
                else return `${value}k`;
              },
              offsetCenter: [0, 0],
              fontSize: theme.typography.fontSize + 10,
              fontFamily: theme.typography.fontFamily?.split(',')[0],
            },
            progress: {
              roundCap: true,
              show: true,
              width: 10,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            itemStyle: {},
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            data: [
              {
                value: 9,
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      icon: Tier,
      title: 'Tire Wear',
      color: theme.palette.warning.darker,
      chartOption: {
        series: [
          {
            name: 'tire wear',
            type: 'gauge',
            min: 0,
            max: 100,
            startAngle: 220,
            endAngle: -35,
            radius: '100%',
            detail: {
              formatter: (value: number) => {
                if (value < 100) return `${value}%`;
                else return `${value}k`;
              },
              offsetCenter: [0, 0],
              fontSize: theme.typography.fontSize + 10,
              fontFamily: theme.typography.fontFamily?.split(',')[0],
            },
            progress: {
              roundCap: true,
              show: true,
              width: 10,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            itemStyle: {},
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            data: [
              {
                value: 25,
              },
            ],
          },
        ],
      },
    },
  ];

  return factors;
};
