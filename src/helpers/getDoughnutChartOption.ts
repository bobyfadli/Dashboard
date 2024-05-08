import { useTheme } from '@mui/material';
import { EChartsOption } from 'echarts-for-react';

export const getDoughnutChartOption = (
  chartOption: EChartsOption,
  color: string,
  isHovered: boolean,
) => {
  const theme = useTheme();

  const modifiedChartOption = {
    ...chartOption,
    series: chartOption.series.map((series: any) => ({
      ...series,
      detail: {
        ...series.detail,
        color: isHovered ? theme.palette.common.white : theme.palette.neutral.dark,
      },

      itemStyle: {
        ...series.itemStyle,
        color: isHovered ? theme.palette.common.white : color,
      },
      axisLine: {
        ...series.axisLine,
        lineStyle: {
          ...series.axisLine.lineStyle,
          color: isHovered
            ? [[1, theme.palette.secondary.lighter]]
            : [[1, theme.palette.grey.A100]],
        },
      },
    })),
  };

  return modifiedChartOption;
};
