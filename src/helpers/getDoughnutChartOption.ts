import { EChartsOption } from 'echarts-for-react';

export const getDoughnutChartOption = (chartOption: EChartsOption, color: string) => {
  const modifiedChartOption = {
    ...chartOption,
    series: chartOption.series.map((series: any) => ({
      ...series,
      itemStyle: {
        ...series.itemStyle,
        color: color,
      },
    })),
  };

  return modifiedChartOption;
};
