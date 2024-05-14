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
import { useForm, SubmitHandler } from 'react-hook-form';
import paths from 'routes/paths';

interface LoginFormValues {
  email: string;
  password: string;
}

const checkBoxLabel = { inputProps: { 'aria-label': 'Checkbox' } };

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  return (
    <Box sx={{ width: { xs: 1, sm: 506 }, px: { xs: 2, sm: 0 } }}>
      <Typography variant="h2">Get's started.</Typography>
      <Typography
        variant="subtitle1"
        component="p"
        sx={(theme) => ({
          color: theme.palette.neutral.main,
          mt: 2,
          mb: 6.75,
        })}
      >
        Don’t have an account?{' '}
        <Link href={paths.signup}>
          <Typography variant="button" color="secondary">
            Sign up
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
          startIcon={<IconifyIcon icon="teenyicons:facebook-solid" />}
          sx={{ width: { sm: 246 } }}
        >
          Sign in with Facebook
        </Button>
      </Stack>

      <Divider>or</Divider>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Paper
          sx={(theme) => ({ padding: theme.spacing(2.5), my: 3, boxShadow: theme.shadows[3] })}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    placeholder="Enter your email"
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

          <Typography variant="h6" component="p" color="secondary">
            Forgot your password?
          </Typography>
        </Stack>

        <Button variant="contained" type="submit" size="large" fullWidth color="secondary">
          <Typography variant="h5" component="span" sx={{ fontFamily: 'Inter' }}>
            Sign in
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
