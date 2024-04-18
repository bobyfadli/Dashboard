import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import IconifyIcon from './base/IconifyIcon';
import avatar from '../assets/avatar.png';

import { sidebarOptions } from 'data/dashboard/sidebarOptions';
import { theme } from 'theme/theme';
import Logo from './icons/Logo';
import { rootPaths } from 'routes/paths';
import InputWithSearchIcon from './InputWithSearchIcon';

const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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

  const drawer = (
    <Toolbar sx={{ height: '100vh' }}>
      <List
        sx={{
          color: theme.palette.text.primary,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          marginLeft: 1,
        }}
      >
        <Stack spacing={1.25 * 1}>
          {sidebarOptions.slice(0, 8).map((option) => (
            <ListItem key={option?.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IconifyIcon icon={option?.icon} height="1.25rem" width="1.25rem" />
                </ListItemIcon>
                <ListItemText primary={option?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>

        <Stack spacing={1.25 * 1}>
          {sidebarOptions.slice(-2).map((option) => (
            <ListItem key={option?.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IconifyIcon icon={option?.icon} height="1.25rem" width="1.25rem" />
                </ListItemIcon>
                <ListItemText primary={option?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Toolbar>
  );

  /// Menu Related Items
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
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
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="new notifications" color="inherit">
          <Badge badgeContent=" " color="error" variant="dot">
            <IconifyIcon icon="mdi:notifications-none" />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar alt="avatar" src={avatar} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />

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
          <IconButton sx={{ display: { sm: 'none' } }}>
            <Logo />
          </IconButton>

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
      {renderMobileMenu}
      {renderMenu}

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          {drawer}
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
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
