import { Paper, Typography, Stack, Grid } from '@mui/material';
import { factors } from 'data/dashboard/factors';
import ReactECharts from 'echarts-for-react';

const Factors = () => {
  return (
    <Grid container spacing={3.75}>
      {factors.map(({ icon: Icon, backgroundColor, ...factor }) => (
        <Grid item xs={12} sm={6} lg key={factor?.id}>
          <Paper
            sx={(theme) => ({
              bgcolor: `${factor.id === 1 && theme.palette.secondary.main}`,
              color: `${factor.id === 1 && 'grey.100'}`,
              // width: 232,
              height: 266,
            })}
          >
            <Stack
              alignItems="center"
              justifyContent="space-between"
              sx={(theme) => ({ py: theme.spacing(2.5), height: 1 })}
            >
              <Stack alignItems="center" rowGap={1.25}>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: 38,
                    width: 38,
                    backgroundColor: backgroundColor,
                    borderRadius: '50%',
                  }}
                >
                  <Icon fill="#A66FF0" />
                </Stack>
                <Typography variant="h1">{factor.title}</Typography>
              </Stack>
              <ReactECharts option={factor.chartOption} style={{ height: 112, width: 112 }} />
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Factors;
{
  /* <Grid container spacing={3}>
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
      </Grid> */
}
