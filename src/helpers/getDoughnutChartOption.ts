import { DoughnutChartOption } from 'types';

export const getDoughnutChartOption = (chartOption: DoughnutChartOption, color: string) => {
  const modifiedChartOption = {
    ...chartOption,
    series: chartOption.series.map((series) => ({
      ...series,
      itemStyle: {
        ...series.itemStyle,
        color: color,
      },
    })),
  };

  return modifiedChartOption;
};
