import { Box, Button, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { EChartsOption } from 'echarts-for-react';
import { useCallback, useState } from 'react';
import * as echarts from 'echarts/core';
import { getAreaChartData } from 'helpers/getChartOption';
import { graphic } from 'echarts/core';

const CarStatistics = () => {
  const [button, setButton] = useState('Day');

  const handleClick = (buttonName: string) => {
    setButton(buttonName);
  };

  const getAreaChartOption = useCallback((button: string) => {
    // console.log('Rendering Area Chart');
    const theme = useTheme();
    const areaChartOption: EChartsOption = {
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
        formatter: (params: Array<any>) => {
          const axisValueLabel = params[0]?.axisValueLabel;
          const value = params[0].value;
          const marker = `<span style="display: inline-block; border-radius: 50%; height: 0.5rem; width: 0.5rem; background:${theme.palette.warning.main}"></span>`;

          return `<div style="width: 3rem; height: 1.875rem;">
                  <strong>${axisValueLabel}</strong> <br/> 
                  ${marker} ${value}
               </div>`;
        },
        padding: [2, 9, 2, 8],
        extraCssText: 'border-radius: 0.3125rem;',
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
          color: theme.palette.grey.A200,
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
                color: alpha(theme.palette.warning.main, 0.24),
              },
              {
                offset: 1,
                color: alpha(theme.palette.error.dark, 0),
              },
            ]),
          },
        },
      ],
    };
    return areaChartOption;
  }, []);

  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(2.75, 3),
      })}
    >
      <Stack rowGap={3} sx={{ mb: 1.75 }}>
        <Typography variant="h3">
          Car{' '}
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
          <Typography variant="subtitle2" component="p" sx={{ color: 'grey.700' }}>
            20 February 2022
          </Typography>

          <Stack direction="row" columnGap={1.25} alignItems={'center'}>
            <Button
              variant={button === 'Day' ? 'contained' : 'text'}
              size="small"
              color="warning"
              onClick={() => handleClick('Day')}
            >
              Day
            </Button>
            <Button
              variant={button === 'Week' ? 'contained' : 'text'}
              size="small"
              color="warning"
              onClick={() => handleClick('Week')}
            >
              Week
            </Button>
            <Button
              variant={button === 'Month' ? 'contained' : 'text'}
              size="small"
              color="warning"
              onClick={() => handleClick('Month')}
            >
              Month
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <ReactEchart echarts={echarts} option={getAreaChartOption(button)} />
    </Paper>
  );
};

export default CarStatistics;
