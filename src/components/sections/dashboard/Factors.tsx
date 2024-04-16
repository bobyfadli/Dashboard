import { Grid, Box, Paper, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { factors } from 'data/dashboard/factors';

const Factors = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mt="6.5rem">
      <Grid container spacing={3}>
        {factors.map((factor) => (
          <Grid item xs={3} key={factor?.id}>
            <Paper>
              <IconifyIcon icon={factor.icon} />
              <Typography variant="h2">{factor?.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Factors;
