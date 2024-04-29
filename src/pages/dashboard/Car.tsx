import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';
import Icon1 from 'components/icons/Icon1';
import Icon2 from 'components/icons/Icon2';
import Icon3 from 'components/icons/Icon3';
import Icon4 from 'components/icons/Icon4';

interface CarProps {
  src: string;
  percentage: number;
  title: string;
  price: number;
  speed: number;
  backgroundColor: string;
}

const Car = ({ src, percentage, title, price, speed, backgroundColor }: CarProps) => {
  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(1.875, 3.375),
        backgroundColor: { backgroundColor },
      })}
    >
      <Stack rowGap={1.375}>
        <Stack direction="row" alignItems="center" columnGap={1.25}>
          <Icon1 />
          <Typography variant="body1">{percentage}% Recommend</Typography>
        </Stack>
        <Box
          sx={{
            // width: '16rem',
            // height: '6.625rem',
            width: 256,
            height: 106,
          }}
        >
          <Image src={src} alt="car-image" sx={{ height: 1, width: 1 }} />
        </Box>
        <Stack>
          <Typography variant="h3">{title}</Typography>
          <Stack direction="row" justifyContent={'space-between'} mt={1} color="grey.600">
            <Stack direction="row" spacing={2}>
              <Icon2 fontSize="small" />
              <Typography variant="body2">{price}K</Typography>
              <Icon3 fontSize="small" />
              <Icon4 fontSize="small" />
            </Stack>
            <Typography variant="body2">${speed}/h</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Car;
