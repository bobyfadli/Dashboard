import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { theme } from 'theme/theme';

const Statistcs = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper>
          <Typography variant="h3">Miles Statistics</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row">
              <Button size="small" variant="contained" sx={{ borderRadius: theme.spacing(3) }}>
                Day
              </Button>
              <Button size="small">Week</Button>
              <Button size="small">Month</Button>
            </Stack>
            <Typography>256 Miles</Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>
          <Typography variant="h3">Car Statistics</Typography>
          <Button size="small" variant="contained" sx={{ borderRadius: theme.spacing(3) }}>
            Day
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Statistcs;
