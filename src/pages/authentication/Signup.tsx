import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import Facebook from 'components/icons/Authentication/Facebook';
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
        sx={(theme) => ({
          color: theme.palette.neutral.main,
          mt: 2,
          mb: 6.75,
        })}
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
          sx={(theme) => ({ width: { sm: 246 }, color: theme.palette.neutral.dark })}
        >
          Sign in with Google
        </Button>

        <Button
          variant="contained"
          size="large"
          startIcon={<Facebook />}
          sx={(theme) => ({ width: { sm: 246 }, bgcolor: theme.palette.primary.dark })}
        >
          Sign in with Facebook
        </Button>
      </Stack>

      <Divider>or</Divider>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Paper
          sx={(theme) => ({ padding: theme.spacing(2.5), my: 3, boxShadow: theme.shadows[1] })}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <TextField
                    fullWidth
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    {...register('firstName')}
                  />
                }
                label={
                  <Typography variant="h6" component="p" mb={1.5}>
                    First Name
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <TextField
                    fullWidth
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    {...register('lastName')}
                  />
                }
                label={
                  <Typography variant="h6" component="p" mb={1.5}>
                    Last Name
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    {...register('email')}
                  />
                }
                label={
                  <Typography variant="h6" component="p" mb={1.5}>
                    Email
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <PasswordTextField
                    fullWidth
                    id="password"
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    {...register('password')}
                  />
                }
                label={
                  <Typography variant="h6" component="p" mb={1.5}>
                    Password
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>
          </Grid>
        </Paper>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3.75}>
          <FormControlLabel
            control={
              <Checkbox
                {...checkBoxLabel}
                sx={(theme) => ({
                  color: theme.palette.neutral.light,
                })}
                icon={<IconifyIcon icon="fluent:checkbox-unchecked-24-regular" />}
                checkedIcon={<IconifyIcon icon="fluent:checkbox-checked-24-regular" />}
              />
            }
            label={
              <Typography
                variant="h6"
                component="p"
                sx={(theme) => ({ color: theme.palette.neutral.light })}
              >
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
