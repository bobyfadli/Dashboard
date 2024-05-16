import { Grid } from '@mui/material';
import { factors } from 'data/dashboard/factors';
import SingleFactor from './SingleFactor';

const Factors = () => {
  return (
    <Grid container spacing={{ xs: 2, lg: 3.75 }}>
      {factors.map((factor) => (
        <Grid item xs={12} sm={6} lg key={factor?.id}>
          <SingleFactor factor={factor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Factors;
