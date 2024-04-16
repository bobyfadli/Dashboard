import { Box } from '@mui/material';
import ResponsiveDrawer from 'components/ResponsiveDrawer';
import React from 'react';
import { Outlet } from 'react-router-dom';

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
            bgcolor: '#f5f5f5',
            paddingX: '1.625rem',
          },
        ]}
      >
        <Outlet></Outlet>
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;
