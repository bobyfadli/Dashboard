import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { useCallback, useState } from 'react';
import * as echarts from 'echarts';
import { getBarChartData } from 'helpers/getChartOption';
import { CallbackDataParams } from 'echarts/types/dist/shared.js';
import { EChartsOption } from 'echarts-for-react';

const MilesStatistics = () => {
  const [button, setButton] = useState('day');

  const handleClick = (buttonName: string) => {
    setButton(buttonName);
  };

  const getBarChartOption = useCallback((button: string) => {
    // console.log(button);
    // console.log('Rendering Bar Chart');
    const theme = useTheme();
    const barChartOption: EChartsOption = {
      color: theme.palette.primary.main,
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'line',
        },
        backgroundColor: theme.palette.neutral.dark,
        textStyle: {
          color: theme.palette.common.white,
          fontSize: theme.typography.fontSize / 1.4,
        },

        formatter: (params: CallbackDataParams[]) => {
          // console.log(params);
          const name = params[0]?.name;
          const color = params[0].color;
          const value = params[0].value as number;
          const marker = `<span style="display: inline-block; border-radius: 50%; height: 0.5rem; width: 0.5rem; background:${color}"></span>`;

          return `<div style="width: 3rem; height: 1.875rem;">
                  <strong>${name}</strong> <br/> 
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
        fontWeight: theme.typography.fontWeightRegular,
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
              color: theme.palette.neutral.lighter,
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
    return barChartOption;
  }, []);

  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(2.75, 3),
      })}
    >
      <Stack rowGap={3} sx={{ mb: 1.75 }}>
        <Typography variant="h3">
          Miles{' '}
          <Box
            component="span"
            sx={(theme) => ({ fontWeight: theme.typography.fontWeightRegular })}
          >
            Statistics
          </Box>
        </Typography>

        <Stack
          sx={{
            flexDirection: { sm: 'row' },
            justifyContent: { sm: 'space-between' },
            alignItems: { sm: 'center' },
            rowGap: { xs: 'inherit' },
          }}
        >
          <Stack direction="row" columnGap={1.25} alignItems={'center'}>
            <Button
              variant={button === 'day' ? 'contained' : 'text'}
              size="small"
              onClick={() => handleClick('day')}
            >
              Day
            </Button>
            <Button
              variant={button === 'week' ? 'contained' : 'text'}
              size="small"
              onClick={() => handleClick('week')}
            >
              Week
            </Button>
            <Button
              variant={button === 'month' ? 'contained' : 'text'}
              size="small"
              onClick={() => handleClick('month')}
            >
              Month
            </Button>
          </Stack>

          <Typography variant="subtitle2" component="p" sx={{ color: 'grey.700' }}>
            256 Miles
          </Typography>
        </Stack>
      </Stack>

      <ReactEchart echarts={echarts} option={getBarChartOption(button)} />
    </Paper>
  );
};

export default MilesStatistics;
