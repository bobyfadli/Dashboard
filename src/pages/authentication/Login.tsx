import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { grey } from 'theme/colors';
const Login = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
    >
      <Box sx={{ width: 506, height: 650 }}>
        <Typography variant="h1" gutterBottom>
          Get's started.
        </Typography>
        <Box display="flex" alignItems="center" mb={7}>
          <Typography variant="body1" color="gray">
            Don’t have an account?
          </Typography>
          <Button variant="text" color="secondary">
            Sign up
          </Button>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{ width: 246, height: 60, borderRadius: 2, fontWeight: 500 }}
            startIcon={<Icon icon="flat-color-icons:google" />}
          >
            Sign in with Google
          </Button>
          <Button
            variant="contained"
            sx={{ width: 246, height: 60, borderRadius: 2, fontWeight: 500 }}
            color="primary"
            startIcon={<Icon icon="humbleicons:brand-facebook" />}
          >
            Sign in with Facebook
          </Button>
        </Stack>
        <Divider
          sx={{
            mt: 3,
            '& .MuiDivider-wrapper': { fontFamily: 'Inter', fontWeight: 500, color: grey[500] },
          }}
        >
          or
        </Divider>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: '100%',
            height: '60px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          Sign in
        </Button>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Box>
    </Container>
  );
};

export default Login;
