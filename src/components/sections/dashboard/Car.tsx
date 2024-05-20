import { Paper, Stack, Typography, useTheme } from '@mui/material';
import Image from 'components/base/Image';
import CirculationIcon from 'components/icons/Car/Icon1';
import LoopIcon from 'components/icons/Car/Icon2';
import SettingsIcon from 'components/icons/Car/Icon3';
import ThunderIcon from 'components/icons/Car/Icon4';
import { ICar } from 'types/types';
import { carImages } from 'data/dashboard/carImages';

const Car = ({ car }: { car: ICar }) => {
  const theme = useTheme();

  const { id, percentage, title, price, speed, backgroundColor } = car;
  const src = carImages[id];

  return (
    <Paper
      sx={{
        p: { xs: theme.spacing(1.875, 3), md: theme.spacing(1.875, 3.375) },
        backgroundColor: backgroundColor,
      }}
    >
      <Stack rowGap={1.375}>
        <Stack direction="row" alignItems="center" columnGap={1.25}>
          <CirculationIcon htmlColor={theme.palette.grey[600]} />
          <Typography variant="body1">{percentage}% Recommend</Typography>
        </Stack>

        <Image
          src={src}
          alt="car-image"
          sx={{
            width: 1,
            height: { xs: 106 },
            objectFit: { xs: 'contain' },
          }}
        />

        <Stack>
          <Typography variant="h3" component="h2">
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            mt={1}
            color={theme.palette.grey[600]}
          >
            <Stack direction="row" columnGap={2}>
              <LoopIcon fontSize="small" />
              <Typography variant="body2" component="span">
                {price}K
              </Typography>
              <SettingsIcon fontSize="small" />
              <ThunderIcon fontSize="small" />
            </Stack>
            <Typography variant="body2" component="span">
              ${speed}/h
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Car;
