import { Box } from '@mui/material';
import ResponsiveDrawer from 'components/ResponsiveDrawer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { theme } from 'theme/theme';

const MainLayout = () => {
  return (
    <React.Fragment>
      <ResponsiveDrawer />

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
    </React.Fragment>
  );
};

export default MainLayout;
