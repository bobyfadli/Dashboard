import { Button, Link, Stack, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Stack alignItems="center" justifyContent="center" spacing={3} sx={{ height: '100vh' }}>
      <Typography variant="h1">404 Page</Typography>
      <Button variant="outlined" component={Link} href="/">
        Go To Dashboard
      </Button>
    </Stack>
  );
};

export default ErrorPage;
