import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { graphic } from 'echarts';
import ReactECharts from 'echarts-for-react';
// import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useState } from 'react';

const Statistics = () => {
  // const { between } = useBreakpoints();

  const [selectedButtonBar, setSelectedButtonBar] = useState('Day');
  const [selectedButtonArea, setSelectedButtonArea] = useState('Day');

  const handleClickBar = (buttonName: string) => {
    setSelectedButtonBar(buttonName);
  };

  const handleClickArea = (buttonName: string) => {
    setSelectedButtonArea(buttonName);
  };

  const barChartOption = {
    color: ['#F4F5F9'],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none',
      },
      backgroundColor: '#282B32',
      borderRadius: 5,
      textStyle: {
        color: 'white',
        fontSize: 10,
      },
    },
    grid: {
      // left: '-20',
      left: '0',
      // right: '-20',
      right: '1',
      top: '0',
      bottom: '12%',
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
            color: '#F2F2F2',
          },
        },
        axisLine: {
          show: false,
        },
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
        barWidth: '40%',
        data: [120, 80, 157, 60, 130, 40, 90],
        cursor: 'none',
        emphasis: {
          focus: 'series',
          itemStyle: {
            color: '#2884FF',
          },
        },
      },
    ],
  };

  const areaChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    xAxis: {
      type: 'category',
      data: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
      axisTick: {
        show: false,
      },
      boundaryGap: false,
      splitLine: {
        show: true,
        lineStyle: { color: ['#F2F2F2'] },
      },
      splitArea: {
        show: false,
      },

      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#808191',
        fontFamily: 'DM Sans',
        fontSize: 14,
        fontWeight: 400,
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
      left: '-20',
      right: '-20',
      top: '0',
      bottom: '12%',
    },
    series: [
      {
        data: [620, 932, 801, 934, 1290, 1130, 1020, 1300],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 1, color: '#FF764C' },
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

  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} lg={6}>
        <Paper
          sx={(theme) => ({
            // height: 332,
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
                  variant={selectedButtonBar === 'Day' ? 'contained' : 'text'}
                  size="small"
                  onClick={() => handleClickBar('Day')}
                >
                  Day
                </Button>
                <Button
                  variant={selectedButtonBar === 'Week' ? 'contained' : 'text'}
                  size="small"
                  onClick={() => handleClickBar('Week')}
                >
                  Week
                </Button>
                <Button
                  variant={selectedButtonBar === 'Month' ? 'contained' : 'text'}
                  size="small"
                  onClick={() => handleClickBar('Month')}
                >
                  Month
                </Button>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: 'grey.700' }}>
                256 Miles
              </Typography>
            </Stack>
          </Stack>

          <ReactECharts
            option={barChartOption}
            lazyUpdate={true}
            style={{ width: '100%', height: 223 }}
            opts={{ renderer: 'svg' }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Paper
          sx={(theme) => ({
            // height: 332,
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
              <Stack
                direction="row"
                alignItems="center"
                // columnGap={{ sm: 1 }}
                columnGap={1}
                sx={(theme) => ({
                  borderRadius: theme.shape.borderRadius * 6,
                  backgroundColor: theme.palette.neutral.lighter,
                  width: 'max-content',
                })}
              >
                <Button
                  variant={selectedButtonArea === 'Day' ? 'contained' : 'text'}
                  size="small"
                  color="warning"
                  onClick={() => handleClickArea('Day')}
                >
                  Day
                </Button>
                <Button
                  variant={selectedButtonArea === 'Week' ? 'contained' : 'text'}
                  size="small"
                  color="warning"
                  onClick={() => handleClickArea('Week')}
                >
                  Week
                </Button>
                <Button
                  variant={selectedButtonArea === 'Month' ? 'contained' : 'text'}
                  size="small"
                  color="warning"
                  onClick={() => handleClickArea('Month')}
                >
                  Month
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <ReactECharts
            option={areaChartOption}
            lazyUpdate={true}
            style={{ width: '100%', height: 223 }}
            opts={{ renderer: 'svg' }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Statistics;
