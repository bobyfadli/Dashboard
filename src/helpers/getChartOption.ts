import { areaChartData, barChartData } from 'data/dashboard/chartData';
import { EChartsOption } from 'echarts-for-react';
import { graphic } from 'echarts';
import { useTheme } from '@mui/material';

const getBarChartData = (button: string) => {
  if (button == 'Day') return barChartData.day;
  else if (button == 'Week') return barChartData.week;
  else return barChartData.month;
};

const getAreaChartData = (button: string) => {
  if (button == 'Day') return areaChartData.day;
  else if (button == 'Week') return areaChartData.week;
  else return areaChartData.month;
};

export const getChartOption = (type: string, button: string) => {
  const theme = useTheme();

  const barChartOption: EChartsOption = {
    color: theme.palette.primary.main,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      backgroundColor: theme.palette.neutral.dark,
      textStyle: {
        color: theme.palette.common.white,
        fontSize: theme.typography.fontSize / 1.4,
      },
      // CallbackDataParams
      formatter: (params: any) => {
        const axisValueLabel = params[0]?.axisValueLabel;
        const color = params[0].color;
        const value = params[0].value;
        // const marker = params[0].marker;
        const marker = `<span style="display: inline-block; border-radius: 50%; height: 0.5rem; width: 0.5rem; background:${color}"></span>`;

        return `<div style="width: 3rem; height: 1.875rem;">
                  <strong>${axisValueLabel}</strong> <br/> 
                  ${marker} ${value < 100 ? value : `${value}k`}
               </div>`;
      },
      padding: [2, 9, 2, 8],
      position: function (pos: Array<number>) {
        return [pos[0], '30%'];
      },
      extraCssText: 'border-radius: 0.3125rem;',
    },

    grid: {
      // left: '-4%',
      left: '0',
      // right: '-4%',
      right: '1',
      top: '0',
      bottom: '12%',
    },

    textStyle: {
      fontFamily: 'DM Sans',
      fontWeight: theme.typography.fontWeightRegular, // 400
    },

    xAxis: [
      {
        type: 'category',
        data: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.palette.neutral.lighter, // #F2F2F2
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: { fontSize: theme.typography.fontSize },
      },
    ],

    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],

    series: [
      {
        type: 'bar',
        barWidth: 28,
        data: getBarChartData(button),
        cursor: 'none',
        emphasis: {
          focus: 'series',
          itemStyle: {
            color: theme.palette.primary.light,
          },
        },
      },
    ],
  };

  const areaChartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      backgroundColor: theme.palette.neutral.dark,
      textStyle: {
        color: theme.palette.common.white,
        fontSize: theme.typography.fontSize / 1.4,
      },
    },

    xAxis: {
      type: 'category',
      data: ['5 am', '7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm', '11pm'],
      // data: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
      axisTick: {
        show: true,
        inside: true,
        alignWithLabel: true,
        length: 300,
        lineStyle: {
          color: theme.palette.neutral.lighter,
        },
      },

      boundaryGap: false,
      splitLine: {
        // show: true,
        // lineStyle: { color: ['#F2F2F2'] },
        show: false,
      },
      splitArea: {
        show: false,
      },

      axisLine: {
        show: false,
      },
      axisLabel: {
        color: theme.palette.grey.A200, // #808191
        fontFamily: theme.typography.fontFamily?.split(',')[0],
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
      },
    },

    yAxis: {
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },

    grid: {
      // left: '3%',
      // right: '3%',
      left: '-5%',
      right: '-5%',
      top: '0',
      bottom: '12%',
    },
    series: [
      {
        data: getAreaChartData(button),
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 1, color: theme.palette.warning.main },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 118, 76, 0.24)',
            },
            {
              offset: 1,
              color: 'rgba(255, 126, 7, 0)',
            },
          ]),
        },
      },
    ],
  };

  if (type === 'bar') {
    return barChartOption;
  } else return areaChartOption;
};
