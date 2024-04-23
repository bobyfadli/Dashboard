import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, useState } from 'react';
import AccountMenu from './AccountMenu';
import LanguagePopover from './LanguagePopover';
import Notification from 'components/icons/Notification';
import OutlinedBadge from 'components/styled/OutlinedBadge';
// import AccountPopover from './AccountPopover';
import SearchBox from 'components/common/SearchBox';

interface TopBarProps {
  drawerWidth: number;
  onHandleDrawerToggle: () => void;
}

const TopBar = ({ drawerWidth, onHandleDrawerToggle }: TopBarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth + 1}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onHandleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <IconifyIcon icon="solar:hamburger-menu-linear" />
        </IconButton>

        <Box>
          <SearchBox />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }} />

        <Box sx={{ display: 'flex' }}>
          <IconButton size="medium" aria-label="languages" color="inherit">
            <LanguagePopover />
          </IconButton>
          <IconButton size="medium" aria-label="notifications" color="inherit">
            <OutlinedBadge badgeContent=" " color="error" variant="dot" overlap="circular">
              <Notification />
            </OutlinedBadge>
          </IconButton>
          <AccountMenu
            open={open}
            anchorEl={anchorEl}
            onHandleClick={handleClick}
            onHandleClose={handleClose}
          />
        </Box>

        {/* <AccountPopover /> */}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
