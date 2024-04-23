import { PropsWithChildren, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import VerticalNavbar from './Drawer/VerticalNavbar';
import TopBar from './TopBar/TopBar';

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
    <Box sx={{ display: 'flex' }}>
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
          p: 3,
          minHeight: '100vh',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: theme.palette.grey[100],
        })}
      >
        <Toolbar />
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
