import { Box, Drawer, DrawerProps } from '@mui/material';
import DrawerList from './DrawerList';
import { TransitionEventHandler } from 'react';

interface VerticalNavbarProps extends DrawerProps {
  drawerWidth: number;
  mobileOpen: boolean;
  onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
  onHandleDrawerClose: () => void;
}

const VerticalNavbar = ({
  drawerWidth,
  mobileOpen,
  onTransitionEnd,
  onHandleDrawerClose,
}: VerticalNavbarProps) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="drawer"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={onTransitionEnd}
        onClose={onHandleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRadius: 0 },
        }}
      >
        <DrawerList />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: 0 },
        }}
        open
      >
        <DrawerList />
      </Drawer>
    </Box>
  );
};

export default VerticalNavbar;
