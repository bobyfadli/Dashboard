import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

interface SingleStatisticProps {
  title: string;
  subtitle: string;
  flexDirection: string;
  buttonTexts: string[];
  buttonVariant: string;
  onHandleClickButton: (buttonName: string) => void;
  chartOption: EChartsOption;
  // buttonColor?: any;
  buttonColor?: 'primary' | 'secondary' | 'warning';
}

const SingleStatistic = ({
  title,
  subtitle,
  flexDirection,
  buttonTexts,
  buttonVariant,
  onHandleClickButton,
  chartOption,
  buttonColor,
}: SingleStatisticProps) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        // height: 332,
        p: theme.spacing(2.75, 3),
        width: { xs: 1, lg: '50%' },
      }}
    >
      <Stack rowGap={3} sx={{ mb: 1.75 }}>
        <Typography variant="h3">
          {title}{' '}
          <Box component="span" sx={{ fontWeight: theme.typography.fontWeightRegular }}>
            Statistics
          </Box>
        </Typography>

        <Stack
          sx={{
            flexDirection: { sm: flexDirection },
            justifyContent: { sm: 'space-between' },
            alignItems: { sm: 'center' },
            rowGap: { xs: 'inherit' },
          }}
        >
          <Stack
            direction="row"
            columnGap={1.25}
            alignItems={'center'}
            sx={[
              title === 'Car' && {
                bgcolor: theme.palette.neutral.lighter,
                borderRadius: theme.shape.borderRadius * 6,
                width: 'max-content',
              },
            ]}
          >
            {buttonTexts.map((text, index) => (
              <Button
                key={index}
                variant={buttonVariant === text ? 'contained' : 'text'}
                size="small"
                color={buttonColor}
                onClick={() => onHandleClickButton(text)}
              >
                {text}
              </Button>
            ))}
          </Stack>

          <Typography variant="subtitle2" component="p" sx={{ color: 'grey.700' }}>
            {subtitle}
          </Typography>
        </Stack>
      </Stack>

      <ReactECharts
        option={chartOption}
        lazyUpdate={true}
        style={{ width: '100%' }}
        opts={{ renderer: 'svg' }}
      />
    </Paper>
  );
};

export default SingleStatistic;
