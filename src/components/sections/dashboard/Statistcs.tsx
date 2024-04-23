import { Box, Button, Typography } from '@mui/material';
import { theme } from 'theme/theme';

const Statistcs = () => {
  return (
    <Box>
      <Typography variant="h2">Statistics Component</Typography>
      <Button size="small" variant="contained" sx={{ borderRadius: theme.spacing(3) }}>
        Day
      </Button>
    </Box>
  );
};

export default Statistcs;
