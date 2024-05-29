import { useTheme } from '@mui/material';
import { EChartsOption } from 'echarts-for-react';

export const getDoughnutChartOptionHelper = (
  chartOption: EChartsOption,
  color: string,
  isHovered: boolean,
) => {
  const theme = useTheme();

  const modifiedChartOption = {
    ...chartOption,
    series: chartOption.series.map((seriesObj: any) => ({
      ...seriesObj,
      detail: {
        ...seriesObj.detail,
        color: isHovered ? theme.palette.common.white : theme.palette.neutral.dark,
      },

      itemStyle: {
        ...seriesObj.itemStyle,
        color: isHovered ? theme.palette.common.white : color,
      },
      axisLine: {
        ...seriesObj.axisLine,
        lineStyle: {
          ...seriesObj.axisLine.lineStyle,
          color: isHovered
            ? [[1, theme.palette.secondary.lighter]]
            : [[1, theme.palette.grey.A100]],
        },
      },
    })),
  };

  return modifiedChartOption;
};
