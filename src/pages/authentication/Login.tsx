import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from 'theme/colors';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import paths from 'routes/paths';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  return (
    <Box sx={{ width: '31.625rem' }}>
      <Typography variant="h1">Get's started.</Typography>
      <Box display="flex" mb={'3.375rem'}>
        <Typography variant="h4" color="gray">
          Don’t have an account?
        </Typography>
        <Link href={paths.signup} underline="none">
          <Typography variant="button" color="secondary">
            &nbsp;Sign up
          </Typography>
        </Link>
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          variant="outlined"
          sx={(theme) => ({
            width: { xs: '100%', sm: '15.375rem' },

            height: '3.75rem',
            borderRadius: 2,
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '1.302rem',
            color: theme.palette.grey[800],
            borderColor: theme.palette.grey[100],
          })}
          startIcon={<IconifyIcon icon="flat-color-icons:google" />}
        >
          Sign in with Google
        </Button>
        <Button
          variant="contained"
          sx={{
            width: { xs: '100%', sm: '15.375rem' },
            height: '3.75rem',
            borderRadius: 2,
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '1.302rem',
            color: 'white',
          }}
          startIcon={<IconifyIcon icon="teenyicons:facebook-solid" />}
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

      <Paper
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          // bgcolor: 'white',
          borderRadius: '0.625rem',
          paddingX: '1.25rem',
          marginTop: 3,
          // boxShadow: '0px 10px 110px 1px #3B3B3B',
          // '& .MuiPaper-root': {
          //   filter: 'drop-shadow(0 10px 110px 1px #3B3B3B)',
          // },
        }}
        variant="outlined"
        elevation={0}
      >
        <Grid container>
          <Grid item xs={12} mb={3}>
            {/* <FormControlLabel
              control={
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  error={!!errors.email}
                  helperText={<>{errors.email?.message}</>}
                  {...register('email')}
                />
              }
              label={
                <Typography variant="body1" mt="1.25rem" mb="0.5rem" color="black">
                  Email
                </Typography>
              }
              labelPlacement="top"
            /> */}

            <FormLabel>
              <Typography variant="body1" mt="1.25rem" mb="0.5rem" color="black">
                Email
              </Typography>
            </FormLabel>
            <TextField
              fullWidth
              id="email"
              type="email"
              placeholder="Enter your email address"
              error={!!errors.email}
              helperText={<>{errors.email?.message}</>}
              {...register('email')}
            />
          </Grid>
          <Grid item xs={12} mb={2.5}>
            <FormLabel>
              <Typography variant="body1" mb="0.5rem" color="black">
                Password
              </Typography>
            </FormLabel>
            <PasswordTextField
              fullWidth
              id="password"
              error={!!errors.password}
              placeholder="*********"
              helperText={<>{errors.password?.message}</>}
              {...register('password')}
            />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...label} size="small" />}
            label={
              <Typography variant="body1" color={grey[200]}>
                Remember me
              </Typography>
            }
          />
        </FormGroup>
        <Typography variant="body1" color="secondary">
          Forgot your password?
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: '100%',
          height: '3.75rem',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '1.25rem',
          borderRadius: '0.5rem',
        }}
      >
        Sign in
      </Button>
    </Box>
  );
};

export default Login;
