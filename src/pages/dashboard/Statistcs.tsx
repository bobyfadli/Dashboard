import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { theme } from 'theme/theme';
import ReactECharts from 'echarts-for-react';

const Statistcs = () => {
  const barChartoption = {
    color: ['#F4F5F9'],
    textStyle: {
      fontFamily: 'DM Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'lighter',
    },

    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },

    xAxis: {
      type: 'category',
      data: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#F2F2F2',
        },
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
    },

    series: [
      {
        data: [163, 124, 185, 107, 163, 78, 134],
        type: 'bar',
      },
    ],
  };

  // Line Chart
  const lineChartOption = {
    color: ['#FF764C'],

    xAxis: {
      type: 'category',
      data: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm'],
      splitLine: {
        show: true,
      },
    },

    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },

    series: [
      {
        data: [10, 30, 50, 60, 20, 30, 20, 50],
        type: 'line',
        smooth: true,
        symbol: 'none',
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper>
          <Typography variant="h3">Miles Statistics</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row">
              <Button size="small" variant="contained" sx={{ borderRadius: theme.spacing(3) }}>
                Day
              </Button>
              <Button size="small">Week</Button>
              <Button size="small">Month</Button>
            </Stack>
            <Typography>256 Miles</Typography>
          </Stack>
          <ReactECharts option={barChartoption} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>
          <Typography variant="h3">Car Statistics</Typography>
          <Button size="small" variant="contained" sx={{ borderRadius: theme.spacing(3) }}>
            Day
          </Button>
          <ReactECharts option={lineChartOption} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Statistcs;
