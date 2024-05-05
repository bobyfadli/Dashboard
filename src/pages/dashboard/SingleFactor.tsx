import { Paper, Typography, Stack, useTheme } from '@mui/material';

// import ReactEchart from 'components/base/ReactEchart';
import ReactECharts from 'echarts-for-react';
import { Factor } from 'types';

const SingleFactor = ({ factor }: { factor: Factor }) => {
  const theme = useTheme();
  const { id, icon: Icon, iconBackground, color, title, chartOption } = factor;
  return (
    <Paper
      sx={[
        id === 1 && { bgcolor: theme.palette.secondary.main, color: 'grey.100' },
        { height: 266 },
        // {  width: 232}
      ]}
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
              backgroundColor: iconBackground,
              borderRadius: '50%',
            }}
          >
            <Icon htmlColor={color} />
          </Stack>
          <Typography variant="h1">{title}</Typography>
        </Stack>
        <ReactECharts
          option={chartOption}
          // lazyUpdate={true}
          style={{ height: 112, width: 112 }}
          // opts={{ renderer: 'svg' }}
        />
      </Stack>
    </Paper>
  );
};

export default SingleFactor;
