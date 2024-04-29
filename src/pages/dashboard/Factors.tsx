import { Paper, Typography, Stack, Box } from '@mui/material';
import Lightning from 'components/icons/Lightning';
// import { factors } from 'data/dashboard/factors';
import ReactECharts from 'echarts-for-react';

const Factors = () => {
  const doughnutChartOption = {
    series: [
      {
        //   name: 'factor',
        type: 'gauge',
        min: 0,
        max: 210,
        startAngle: 220,
        endAngle: -35,

        radius: '100%',
        detail: {
          formatter: function (value: number) {
            if (value < 100) return `${value}%`;
            else return `${value}k%`;
          },
          offsetCenter: [0, 0],
          fontSize: 24,
          fontFamily: 'DM Sans',
          // fontWeight: 'bold',
          color: 'white',
        },

        progress: {
          roundCap: true,
          show: true,
          width: 10,
        },

        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 10,
          },
        },

        itemStyle: {
          color: 'red',
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

        pointer: {
          show: false,
        },

        data: [
          {
            value: 157,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Paper
        sx={(theme) => ({
          bgcolor: theme.palette.secondary.main,
          color: 'grey.100',
          width: 232,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: theme.spacing(2.5, 7.5),
        })}
      >
        <Stack alignItems="center" rowGap={3.75}>
          <Stack alignItems="center" rowGap={1.25}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 38,
                width: 38,
                backgroundColor: '#A66FF0',
                borderRadius: '50%',
              }}
            >
              <Lightning />
            </Box>
            <Typography variant="h1">Energy</Typography>
          </Stack>
          <ReactECharts option={doughnutChartOption} style={{ height: 112, width: 112 }} />
        </Stack>
      </Paper>
      {/* <Grid container spacing={3}>
        {factors.map(({ icon: Icon, ...factor }) => (
          <Grid item xs={12} md={6} lg={3} key={factor?.id}>
            <Paper
              sx={(theme) => ({
                bgcolor: `${factor.id === 1 && theme.palette.secondary.main}`,
                color: `${factor.id === 1 && 'grey.100'}`,
              })}
            >
              <Stack
                alignItems="center"
                rowGap={1.25}
                sx={(theme) => ({
                  p: theme.spacing(2.5, 0),
                })}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 38,
                    width: 38,
                    backgroundColor: 'grey.300',
                    borderRadius: '50%',
                  }}
                >
                  <Icon height="1.25rem" width="1.25rem" fontSize="small" />
                </Box>

                <Typography variant="h1">{factor?.title}</Typography>
              </Stack>
              <ReactECharts
                option={doughnutChartOption}
                style={{ height: '100%', width: '100%' }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default Factors;
