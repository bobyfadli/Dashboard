import { Grid } from '@mui/material';
import { getFactorsData } from 'data/dashboard/factors';
import SingleFactor from './SingleFactor';

const Factors = () => {
  const factors = getFactorsData();

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
