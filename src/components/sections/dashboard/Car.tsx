import { Paper, Stack, Typography, useTheme } from '@mui/material';
import Image from 'components/base/Image';
import Icon1 from 'components/icons/Car/Icon1';
import Icon2 from 'components/icons/Car/Icon2';
import Icon3 from 'components/icons/Car/Icon3';
import Icon4 from 'components/icons/Car/Icon4';

interface CarProps {
  src: string;
  percentage: number;
  title: string;
  price: number;
  speed: number;
  backgroundColor: string;
}

const Car = ({ src, percentage, title, price, speed, backgroundColor }: CarProps) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: { xs: theme.spacing(1.875, 3), md: theme.spacing(1.875, 3.375) },
        backgroundColor: { backgroundColor },
      }}
    >
      <Stack rowGap={1.375}>
        <Stack direction="row" alignItems="center" columnGap={1.25}>
          <Icon1 htmlColor={theme.palette.grey[600]} />
          <Typography variant="body1">{percentage}% Recommend</Typography>
        </Stack>

        <Image
          src={src}
          alt="car-image"
          sx={{ width: 1, height: { xs: 1, lg: 106 }, objectFit: 'fill' }}
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
              <Icon2 fontSize="small" />
              <Typography variant="body2" component="span">
                {price}K
              </Typography>
              <Icon3 fontSize="small" />
              <Icon4 fontSize="small" />
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
