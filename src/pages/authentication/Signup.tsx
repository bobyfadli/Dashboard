import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from 'theme/colors';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import { SubmitHandler, useForm } from 'react-hook-form';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface LoginFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  return (
    <Box sx={{ width: '31.625rem', height: '40.625rem' }}>
      <Typography variant="h1">Get's started.</Typography>
      <Box display="flex" mb={'3.375rem'}>
        <Typography variant="h4" color="gray">
          Don’t have an account?
        </Typography>
        <Typography variant="button" color="secondary">
          &nbsp;Sign in
        </Typography>
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center' }} spacing={2}>
        <Button
          variant="outlined"
          sx={{
            width: '15.375rem',
            height: '3.75rem',
            borderRadius: 2,
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '1.302rem',
            color: grey[800],
          }}
          startIcon={<IconifyIcon icon="flat-color-icons:google" />}
        >
          Sign in with Google
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '15.375rem',
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
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          bgcolor: 'white',
          borderRadius: '0.625rem',
          paddingLeft: '1.25rem',
          paddingRight: '2.5rem',
          marginTop: 3,
        }}
      >
        <Grid container rowSpacing="0.75rem" paddingY="1.25rem">
          <Grid item xs={12}>
            <FormLabel>
              <Typography variant="body1" mb="0.75rem" color="black">
                First Name
              </Typography>
            </FormLabel>
            <TextField
              fullWidth
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              error={!!errors.firstName}
              helperText={<>{errors.firstName?.message}</>}
              {...register('firstName')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>
              <Typography variant="body1" mb="0.75rem" color="black">
                Last Name
              </Typography>
            </FormLabel>
            <TextField
              fullWidth
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              error={!!errors.lastName}
              helperText={<>{errors.lastName?.message}</>}
              {...register('lastName')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>
              <Typography variant="body1" mb="0.75rem" color="black">
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
          <Grid item xs={12}>
            <FormLabel>
              <Typography variant="body1" mb="0.75rem" color="black">
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

export default Signup;
