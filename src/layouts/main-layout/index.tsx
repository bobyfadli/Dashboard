import { Box } from '@mui/material';
import ResponsiveDrawerWithAppBar from 'components/ResponsiveDrawerWithAppBar';

import { Outlet } from 'react-router-dom';
import { theme } from 'theme/theme';

const MainLayout = () => {
  return (
    <>
      <ResponsiveDrawerWithAppBar />

      <Box
        component="main"
        sx={[
          {
            minHeight: '100vh',
            marginLeft: { sm: '240px' },
            bgcolor: theme.palette.grey[100],
            paddingX: '1.625rem',
            paddingTop: 2,
          },
        ]}
      >
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default MainLayout;
