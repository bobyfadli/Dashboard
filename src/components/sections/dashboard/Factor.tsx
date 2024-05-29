import { Paper, Typography, Stack, alpha, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import * as echarts from 'echarts/core';
import { getDoughnutChartOptionHelper } from 'helpers/getDoughnutChartOptionHelper';
import { useCallback, useState } from 'react';
import { IFactor } from 'types/types';

const Factor = ({ factor }: { factor: IFactor }) => {
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const { icon: Icon, color, title, value, max = 100 } = factor;

  const [paletteOption, simplePaletteColorOption] = color.split('.') as [
    keyof typeof theme.palette,
    keyof (typeof theme.palette)[keyof typeof theme.palette],
  ];
  const factorColor = theme.palette[paletteOption][simplePaletteColorOption];

  const getDoughnutChartOption = useCallback(
    (color: string, value: number, max: number, isHovered: boolean) => {
      const chartOption = {
        tooltip: { show: false },
        series: [
          {
            type: 'gauge',
            min: 0,
            max,
            startAngle: 220,
            endAngle: -35,
            radius: '100%',
            detail: {
              formatter: (value: number) => (value < 100 ? `${value}%` : `${value}k`),
              offsetCenter: [0, 0],
              fontSize: theme.typography.fontSize + 10,
              fontFamily: theme.typography.fontFamily?.split(',')[0],
            },
            progress: { roundCap: true, show: true, width: 10 },
            axisLine: { roundCap: true, lineStyle: { width: 10 } },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            data: [{ value }],
          },
        ],
      };
      return getDoughnutChartOptionHelper(chartOption, color, isHovered);
    },
    [],
  );

  return (
    <Paper
      sx={{
        transition: 'background-color 0.8s',
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'grey.100',
          cursor: 'pointer',
          '& .iconWrapper': {
            bgcolor: 'secondary.light',
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack alignItems="center" rowGap={3.75} sx={{ py: 2.5, height: 1 }}>
        <Stack alignItems="center" rowGap={1.25}>
          <Stack
            justifyContent="center"
            alignItems="center"
            className="iconWrapper"
            sx={{
              height: 38,
              width: 38,
              bgcolor: alpha(factorColor, 0.1),
              borderRadius: '50%',
            }}
          >
            <Icon htmlColor={isHovered ? 'grey.100' : factorColor} />
          </Stack>
          <Typography variant="h2">{title}</Typography>
        </Stack>
        <ReactEchart
          echarts={echarts}
          option={getDoughnutChartOption(factorColor, value, max, isHovered)}
          style={{ height: 112, width: 112 }}
        />
      </Stack>
    </Paper>
  );
};

export default Factor;
