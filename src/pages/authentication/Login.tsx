import { Box, Link, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import paths from 'routes/paths';

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
    <Box>
      <Typography variant="h1">Get's started.</Typography>
      <Typography variant="h4" sx={(theme) => ({ color: theme.palette.neutral.main })}>
        Don’t have an account?
      </Typography>
      <Link href={paths.signup}>
        <Typography variant="button" color="secondary">
          &nbsp;Sign up
        </Typography>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('email')} />

        <input {...register('password', { required: true })} />

        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Box>
  );
};

export default Login;

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const Login = () => {

//   return (
//     <Box sx={{ width: '31.625rem' }}>
// <Typography variant="h1">Get's started.</Typography>
// <Box display="flex" mb={'3.375rem'}>
//   <Typography variant="h4" sx={(theme) => ({ color: theme.palette.neutral.main })}>
//     Don’t have an account?
//   </Typography>
//   <Link href={paths.signup}>
//     <Typography variant="button" color="secondary">
//       &nbsp;Sign up
//     </Typography>
//   </Link>
//       </Box>

//       <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//         <Button
//           variant="outlined"
//           sx={(theme) => ({
//             width: { xs: '100%', sm: '15.375rem' },

//             height: '3.75rem',
//             borderRadius: 2,
//             fontWeight: 500,
//             fontSize: '1rem',
//             lineHeight: '1.302rem',
//             color: theme.palette.grey[800],
//             borderColor: theme.palette.grey[100],
//           })}
//           startIcon={<IconifyIcon icon="flat-color-icons:google" />}
//         >
//           Sign in with Google
//         </Button>
//         <Button
//           variant="contained"
//           sx={{
//             width: { xs: '100%', sm: '15.375rem' },
//             height: '3.75rem',
//             borderRadius: 2,
//             fontWeight: 500,
//             fontSize: '1rem',
//             lineHeight: '1.302rem',
//             color: 'white',
//           }}
//           startIcon={<IconifyIcon icon="teenyicons:facebook-solid" />}
//         >
//           Sign in with Facebook
//         </Button>
//       </Stack>

//       <Divider
//         sx={(theme) => ({
//           mt: 3,
//           '& .MuiDivider-wrapper': {
//             fontFamily: 'Inter',
//             fontWeight: 500,
//             color: theme.palette.neutral.main,
//           },
//         })}
//       >
//         or
//       </Divider>

//       <Paper
//         onSubmit={handleSubmit(onSubmit)}
//         sx={{
//           // bgcolor: 'white',
//           borderRadius: '0.625rem',
//           paddingX: '1.25rem',
//           marginTop: 3,
//           // boxShadow: '0px 10px 110px 1px #3B3B3B',
//           // '& .MuiPaper-root': {
//           //   filter: 'drop-shadow(0 10px 110px 1px #3B3B3B)',
//           // },
//         }}
//         variant="outlined"
//         elevation={0}
//       >
//         <Grid container>
//           <Grid item xs={12} mb={3}>
//             {/* <FormControlLabel
//               control={
//                 <TextField
//                   fullWidth
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email address"
//                   error={!!errors.email}
//                   helperText={<>{errors.email?.message}</>}
//                   {...register('email')}
//                 />
//               }
//               label={
//                 <Typography variant="body1" mt="1.25rem" mb="0.5rem" color="black">
//                   Email
//                 </Typography>
//               }
//               labelPlacement="top"
//             /> */}

//             <FormLabel>
//               <Typography variant="body1" mt="1.25rem" mb="0.5rem" color="black">
//                 Email
//               </Typography>
//             </FormLabel>
//             <TextField
//               fullWidth
//               id="email"
//               type="email"
//               placeholder="Enter your email address"
//               error={!!errors.email}
//               helperText={<>{errors.email?.message}</>}
//               {...register('email')}
//             />
//           </Grid>
//           <Grid item xs={12} mb={2.5}>
//             <FormLabel>
//               <Typography variant="body1" mb="0.5rem" color="black">
//                 Password
//               </Typography>
//             </FormLabel>
//             <PasswordTextField
//               fullWidth
//               id="password"
//               error={!!errors.password}
//               placeholder="*********"
//               helperText={<>{errors.password?.message}</>}
//               {...register('password')}
//             />
//           </Grid>
//         </Grid>
//       </Paper>

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3 }}>
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox {...label} size="small" />}
//             label={
//               <Typography variant="body1" sx={(theme) => ({ color: theme.palette.text.secondary })}>
//                 Remember me
//               </Typography>
//             }
//           />
//         </FormGroup>
//         <Typography variant="body1" color="secondary">
//           Forgot your password?
//         </Typography>
//       </Box>

//       <Button
//         variant="contained"
//         color="secondary"
//         sx={{
//           width: '100%',
//           height: '3.75rem',
//           fontFamily: 'Inter',
//           fontWeight: 700,
//           fontSize: '1.25rem',
//           borderRadius: '0.5rem',
//         }}
//       >
//         Sign in
//       </Button>
//     </Box>
//   );
// };

// export default Login;
