import Blood from 'components/icons/Blood';
import Lightning from 'components/icons/Lightning';
import Range from 'components/icons/Range';
import Tier from 'components/icons/Tier';
import { Factor } from 'types';

export const factors: Factor[] = [
  {
    id: 1,
    icon: Lightning,
    title: 'Energy',
    iconBackground: '#A66FF0',
    color: '#FFFFFF', // itemStyle color will be same
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
              else return `${value}k%`;
            },
            offsetCenter: [0, 0],
            fontSize: 24,
            fontFamily: 'DM Sans',
            color: '#FFFFFF',
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
              color: [[1, '#B37EFC']],
            },
          },
          itemStyle: {
            // color: '#FFFFFF', // modify this
          },
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
              value: 45,
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    icon: Range,
    title: 'Range',
    iconBackground: '#FF7E861A',
    color: '#FF7E86',
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
              else return `${value}k%`;
            },
            offsetCenter: [0, 0],
            fontSize: 24,
            fontFamily: 'DM Sans',
            color: '#242731',
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
          itemStyle: {
            // color: '#FF7E86',
          },
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
    title: 'Break fluid',
    iconBackground: '#A162F71A',
    color: '#A162F7',
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
              else return `${value}k%`;
            },
            offsetCenter: [0, 0],
            fontSize: 24,
            fontFamily: 'DM Sans',
            color: '#242731',
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
          itemStyle: {
            // color: '#A162F7',
          },
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
    iconBackground: '#F6CC0D1A',
    color: '#F6CC0D',
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
              else return `${value}k%`;
            },
            offsetCenter: [0, 0],
            fontSize: 24,
            fontFamily: 'DM Sans',
            color: '#242731',
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
          itemStyle: {
            // color: '#F6CC0D',
          },
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
