import {
  Box,
  Drawer,
  Toolbar,
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Link,
  ListItem,
  Typography,
} from '@mui/material';

import IconifyIcon from './base/IconifyIcon';
import avatar from '../assets/avatar.png';

import Logo from './icons/Logo';
import { rootPaths } from 'routes/paths';
import InputWithSearchIcon from './InputWithSearchIcon';
import Sidebar from 'layouts/main-layout/Sidebar';
import { useState } from 'react';
import DesktopMenu from 'layouts/main-layout/DesktopMenu';
import MobileMenu from 'layouts/main-layout/MobileMenu';

const drawerWidth = 240;

export default function ResponsiveDrawerWithAppBar() {
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

  /// Menu Related Items
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth + 1}px)` },
          height: '4.875rem',
          ml: { sm: `${drawerWidth}px` },
          color: 'gray',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <IconifyIcon icon="solar:hamburger-menu-linear" />
          </IconButton>

          <InputWithSearchIcon />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="new notifications" color="inherit">
              <Badge badgeContent=" " color="error" variant="dot" overlap="circular">
                <IconifyIcon icon="mdi:notifications-none" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="avatar" src={avatar} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <IconifyIcon icon="ci:more-vertical" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileMenu
        anchorEl={mobileMoreAnchorEl}
        menuId={mobileMenuId}
        isMenuOpen={isMobileMenuOpen}
        handleMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        open
      ></MobileMenu>

      <DesktopMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        open
      ></DesktopMenu>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRadius: 0 },
          }}
        >
          <ListItem sx={{ pl: 2 }}>
            <Link href={rootPaths.root}>
              <Logo></Logo>
            </Link>
            <Typography variant="h2" ml="0.75rem">
              Motiv.
            </Typography>
          </ListItem>

          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: 0,
            },
          }}
          open
        >
          <Toolbar>
            <ListItem>
              <Link href={rootPaths.root}>
                <Logo></Logo>
              </Link>

              <Typography variant="h2" ml="0.75rem">
                Motiv.
              </Typography>
            </ListItem>
          </Toolbar>
          <Sidebar />
        </Drawer>
      </Box>
    </Box>
  );
}
