import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import Facebook from 'components/icons/authentication/Facebook';
import { useForm, SubmitHandler } from 'react-hook-form';
import paths from 'routes/paths';

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const checkBoxLabel = { inputProps: { 'aria-label': 'Checkbox' } };

const Signup = () => {
  const { register, handleSubmit } = useForm<SignUpFormValues>();
  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => console.log(data);

  return (
    <Box sx={{ width: { xs: 1, sm: 506 }, px: { xs: 2, sm: 0 }, my: 5 }}>
      <Typography variant="h1">Get's started.</Typography>
      <Typography
        variant="subtitle1"
        component="p"
        sx={{
          color: 'neutral.main',
          mt: 2,
          mb: 6.75,
        }}
      >
        Do you have an account?{' '}
        <Link href={paths.login}>
          <Typography variant="button" color="secondary">
            Sign in
          </Typography>
        </Link>
      </Typography>

      <Stack gap={1.75} mb={3} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<IconifyIcon icon="flat-color-icons:google" />}
          sx={{ width: { sm: 246 }, color: 'neutral.dark' }}
        >
          Sign in with Google
        </Button>

        <Button
          variant="contained"
          size="large"
          startIcon={<Facebook />}
          sx={{ width: { sm: 246 }, bgcolor: 'primary.dark' }}
        >
          Sign in with Facebook
        </Button>
      </Stack>

      <Divider>or</Divider>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Paper sx={(theme) => ({ padding: theme.spacing(2.5), my: 3, boxShadow: 1 })}>
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <TextField
                fullWidth
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                autoComplete="given-name"
                {...register('firstName')}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <TextField
                fullWidth
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                autoComplete="family-name"
                {...register('lastName')}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextField
                fullWidth
                id="email"
                type="text"
                placeholder="Enter your email"
                autoComplete="email"
                {...register('email')}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <PasswordTextField
                fullWidth
                id="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                {...register('password')}
              />
            </Grid>
          </Grid>
        </Paper>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3.75}>
          <FormControlLabel
            control={
              <Checkbox
                {...checkBoxLabel}
                sx={{
                  color: 'neutral.light',
                }}
                icon={<IconifyIcon icon="fluent:checkbox-unchecked-24-regular" />}
                checkedIcon={<IconifyIcon icon="fluent:checkbox-checked-24-regular" />}
              />
            }
            label={
              <Typography variant="h6" component="p" sx={{ color: 'neutral.light' }}>
                Remember me
              </Typography>
            }
          />

          <Typography variant="h6" component={Link} href="#!" color="secondary">
            Forgot your password?
          </Typography>
        </Stack>

        <Button variant="contained" type="submit" size="large" fullWidth color="secondary">
          <Typography
            variant="h5"
            component="span"
            sx={(theme) => ({ fontFamily: theme.typography.fontFamily?.split(',')[1] })}
          >
            Sign up
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
