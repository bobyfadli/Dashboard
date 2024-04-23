import { Grid, Box, Paper, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import IconifyIcon from 'components/base/IconifyIcon';
import { factors } from 'data/dashboard/factors';
import ReactECharts from 'echarts-for-react';

const Factors = () => {
  const option = {
    series: [
      {
        type: 'gauge',

        radius: '100%',

        progress: {
          roundCap: true,
          show: true,
          width: 12,
        },

        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 12,
          },
        },

        itemStyle: {
          color: 'red',
        },

        pointer: {
          show: false,
        },

        axisTick: {
          show: false,
        },

        splitLine: {
          show: false,
        },

        axisLabel: {
          show: false,
        },

        anchor: {
          show: false,
        },

        detail: {
          fontSize: 20,
          offsetCenter: [0, 0],
          formatter: '{value}%',
        },
        data: [
          {
            value: 45,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Grid container spacing={3}>
        {factors.map((factor) => (
          <Grid item xs={12} sm={6} md={3} key={factor?.id}>
            <Paper
              sx={(theme) => ({
                textAlign: 'center',
                // paddingY: 3,
                bgcolor: `${factor.id === 1 && theme.palette.secondary.main}`,
              })}
            >
              <Box>
                <IconifyIcon
                  icon={factor.icon}
                  sx={{
                    width: '2.375rem',
                    height: '2.375rem',
                    borderRadius: '50%',
                    bgcolor: purple[50],
                    padding: 1,
                  }}
                />
              </Box>
              <Typography variant="h1">{factor?.title}</Typography>
              <ReactECharts option={option} style={{ height: 112 }} />
              {/* <Typography variant="h2">{factor?.value}%</Typography> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Factors;
