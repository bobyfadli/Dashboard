import { Grid } from '@mui/material';
import { factors } from 'data/dashboard/factors';
import SingleFactor from './SingleFactor';

const Factors = () => {
  return (
    <Grid container spacing={3.75}>
      {factors.map((factor) => (
        <Grid item xs={12} sm={6} lg key={factor?.id}>
          <SingleFactor factor={factor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Factors;
{
  /* {factors.map(({ icon: Icon, backgroundColor, ...factor }) => (
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
      ))} */
}
