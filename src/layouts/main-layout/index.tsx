import { PropsWithChildren, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import VerticalNavbar from './Drawer/VerticalNavbar';
import TopBar from './TopBar/TopBar';
import { Stack } from '@mui/material';

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

      <Stack
        component="main"
        rowGap={3.75}
        sx={(theme) => ({
          flexGrow: 1,
          p: { xs: theme.spacing(0, 3, 3.75, 3), md: theme.spacing(0, 5.375, 3.75, 3.75) },
          minHeight: '100vh',
          width: { xs: 1, sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: 'grey.100',
        })}
      >
        <Toolbar />
        {children}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
