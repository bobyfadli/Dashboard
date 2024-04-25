import { Grid, Paper, Typography, Stack, Box } from '@mui/material';
import { factors } from 'data/dashboard/factors';
// import ReactECharts from 'echarts-for-react';

const Factors = () => {
  // const option = {
  //   series: [
  //     {
  //       type: 'gauge',

  //       radius: '100%',

  //       progress: {
  //         roundCap: true,
  //         show: true,
  //         width: 12,
  //       },

  //       axisLine: {
  //         roundCap: true,
  //         lineStyle: {
  //           width: 12,
  //         },
  //       },

  //       itemStyle: {
  //         color: 'red',
  //       },

  //       pointer: {
  //         show: false,
  //       },

  //       axisTick: {
  //         show: false,
  //       },

  //       splitLine: {
  //         show: false,
  //       },

  //       axisLabel: {
  //         show: false,
  //       },

  //       anchor: {
  //         show: false,
  //       },

  //       detail: {
  //         fontSize: 20,
  //         offsetCenter: [0, 0],
  //         formatter: '{value}%',
  //       },
  //       data: [
  //         {
  //           value: 45,
  //         },
  //       ],
  //     },
  //   ],
  // };

  return (
    <>
      <Grid container spacing={3}>
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
                {/* <ReactECharts option={option} /> */}
                {/* <Typography variant="h2">{factor?.value}%</Typography> */}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Factors;
