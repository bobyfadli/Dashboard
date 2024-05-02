import { PropsWithChildren, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import VerticalNavbar from './Drawer/VerticalNavbar';
import TopBar from './TopBar/TopBar';
import { Box, Stack } from '@mui/material';

const drawerWidth = 248;

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack flexDirection="row">
      <TopBar drawerWidth={drawerWidth} onHandleDrawerToggle={handleDrawerToggle} />

      <VerticalNavbar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onHandleDrawerClose={handleDrawerClose}
      />

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          p: theme.spacing(3),
          minHeight: '100vh',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: theme.palette.grey[100],
        })}
      >
        <Toolbar />
        <Stack rowGap={3}>{children}</Stack>
      </Box>
    </Stack>
  );
};

export default MainLayout;
