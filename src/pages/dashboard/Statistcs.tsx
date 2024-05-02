import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import ReactECharts from 'echarts-for-react';

const Statistcs = () => {
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
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
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
        barWidth: '30%',
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

  // const areaChartOption = {
  //   color: ['#FF764C'],

  //   xAxis: {
  //     type: 'category',
  //     data: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
  //     axisTick: {
  //       show: false,
  //     },
  //     boundaryGap: false,
  //     splitLine: {
  //       show: true,
  //       lineStyle: { color: ['#F2F2F2'] },
  //     },
  //     splitArea: {
  //       show: false,
  //     },

  //     axisLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       color: '#808191',
  //       fontFamily: 'DM Sans',
  //       fontSize: 14,
  //       fontWeight: 400,
  //     },
  //   },

  //   yAxis: {
  //     splitLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //   },

  //   series: [
  //     {
  //       data: [620, 932, 801, 934, 1290, 1130, 1020, 1300],
  //       type: 'line',
  //       smooth: true,
  //       symbol: 'none',
  //       areaStyle: {},
  //     },
  //   ],
  // };

  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} md={6}>
        <Paper sx={(theme) => ({ p: theme.spacing(2.75, 3) })}>
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
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" columnGap={1.25} alignItems={'center'}>
                <Button variant="contained" size="small">
                  Day
                </Button>
                <Button variant="text" size="small">
                  Week
                </Button>
                <Button variant="text" size="small">
                  Month
                </Button>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: 'grey.700' }}>
                256 Miles
              </Typography>
            </Stack>
          </Stack>
          <ReactECharts option={barChartOption} />
        </Paper>
      </Grid>

      {/* <Grid item xs={12} md={6}>
        <Paper sx={{ width: 498, height: 332 }}>
          <Stack rowGap={2.5} sx={(theme) => ({ px: theme.spacing(3), pt: theme.spacing(2.75) })}>
            <Typography variant="h3">
              Car{' '}
              <Box
                component="span"
                sx={(theme) => ({ fontWeight: theme.typography.fontWeightRegular })}
              >
                Statistics
              </Box>
            </Typography>
            <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="subtitle2" sx={{ color: 'grey.700' }}>
                20 February 2022
              </Typography>

              <Box>
                <Button>Day</Button>
                <Button>Month</Button>
                <Button>week</Button>
              </Box>
            </Stack>
          </Stack>
          <ReactECharts option={areaChartOption} />
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default Statistcs;
