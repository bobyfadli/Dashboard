import { AppBar, IconButton, Link, Stack, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, useState } from 'react';
import AccountMenu from './AccountMenu';
import LanguagePopover from './LanguagePopover';
import Notification from 'components/icons/Notification';

import SearchBox from 'components/common/SearchBox';
import { rootPaths } from 'routes/paths';
import Logo from 'components/icons/Logo';
import OutlinedBadge from 'components/styled/OutlinedBadge';

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
        width: { md: `calc(100% - ${drawerWidth + 1}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Stack direction="row" flexGrow={1} columnGap={{ sm: 1 }}>
          <Link href={rootPaths.root} sx={{ display: { md: 'none' } }}>
            <IconButton color="inherit">
              <Logo sx={{ fontSize: 27 }} />
            </IconButton>
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onHandleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <IconifyIcon icon="mdi:hamburger-menu" />
          </IconButton>
          <SearchBox />
        </Stack>
        <Stack direction="row" columnGap={{ sm: 2, md: 3 }}>
          <LanguagePopover />
          <IconButton aria-label="notifications" color="inherit">
            <OutlinedBadge badgeContent=" " color="error" variant="dot" overlap="circular">
              <Notification />
            </OutlinedBadge>
          </IconButton>
        </Stack>

        <AccountMenu
          open={open}
          anchorEl={anchorEl}
          onHandleClick={handleClick}
          onHandleClose={handleClose}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
