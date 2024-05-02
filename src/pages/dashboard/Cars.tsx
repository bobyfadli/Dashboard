import { Grid } from '@mui/material';
import { cars } from 'data/dashboard/cars';
import car1Image from '../../assets/car-1.png';
import car2Image from '../../assets/car-2.png';
import car3Image from '../../assets/car-3.png';
import Car from './Car';

const Cars = () => {
  const carImages: Record<number, string> = { 1: car1Image, 2: car2Image, 3: car3Image };

  return (
    <Grid container spacing={3.75}>
      {cars.map(({ id, percentage, title, price, speed, backgroundColor }) => (
        <Grid item key={id} xs={12} sm>
          <Car
            src={carImages[id]}
            percentage={percentage}
            title={title}
            price={price}
            speed={speed}
            backgroundColor={backgroundColor}
          />
        </Grid>
      ))}
    </Grid>
    // <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.75}>
    //   {cars.map(({ id, percentage, title, price, speed, backgroundColor }) => (
    //     <Box gridColumn="span 4">
    //       <Car
    //         src={carImages[id]}
    //         percentage={percentage}
    //         title={title}
    //         price={price}
    //         speed={speed}
    //         backgroundColor={backgroundColor}
    //       />
    //     </Box>
    //   ))}
    // </Box>
  );
};

export default Cars;
