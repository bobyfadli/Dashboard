import { Paper, Typography, Stack, alpha } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { getDoughnutChartOption } from 'helpers/getDoughnutChartOption';
import { useState } from 'react';
import { IFactor } from 'types/types';

const SingleFactor = ({ factor }: { factor: IFactor }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { icon: Icon, color, title, chartOption } = factor;

  return (
    <Paper
      sx={(theme) => ({
        transition: 'background-color 0.8s',
        ':hover': {
          bgcolor: theme.palette.secondary.main,
          color: 'grey.100',
          cursor: 'pointer',

          '& .iconWrapper': {
            bgcolor: theme.palette.secondary.light,
          },
        },

        // height: { lg: 266 },
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack
        alignItems="center"
        rowGap={3.75}
        sx={(theme) => ({ py: theme.spacing(2.5), height: 1 })}
      >
        <Stack alignItems="center" rowGap={1.25}>
          <Stack
            justifyContent="center"
            alignItems="center"
            className="iconWrapper"
            sx={{
              height: 38,
              width: 38,
              backgroundColor: alpha(color, 0.1),
              borderRadius: '50%',
            }}
          >
            <Icon htmlColor={isHovered ? 'grey.100' : color} />
          </Stack>

          <Typography variant="h2">{title}</Typography>
        </Stack>

        <ReactECharts
          option={getDoughnutChartOption(chartOption, color, isHovered)}
          // option={chartOption}
          lazyUpdate={true}
          opts={{ renderer: 'svg' }}
          style={{ height: 112, width: 112 }}
        />
      </Stack>
    </Paper>
  );
};

export default SingleFactor;
