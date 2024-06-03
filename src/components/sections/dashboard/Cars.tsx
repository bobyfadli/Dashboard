import { Grid } from '@mui/material';
import { cars } from 'data/dashboard/cars';
import Car from './Car';

const Cars = () => {
  return (
    <Grid container spacing={3.75} mb={3.75}>
      {cars.map((car) => (
        <Grid item key={car.id} xs={12} sm={6} lg>
          <Car car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cars;
