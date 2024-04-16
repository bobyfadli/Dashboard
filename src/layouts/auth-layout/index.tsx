import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginY: 8,
        padding: 2,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
