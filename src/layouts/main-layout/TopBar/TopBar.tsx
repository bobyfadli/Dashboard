import { AppBar, Box, IconButton, Link, Stack, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, useState } from 'react';
import AccountMenu from './AccountMenu';
import LanguagePopover from './LanguagePopover';
import Notification from 'components/icons/Notification';
import OutlinedBadge from 'components/styled/OutlinedBadge';
import SearchBox from 'components/common/SearchBox';
import { rootPaths } from 'routes/paths';
import Logo from 'components/icons/Logo';

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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Link href={rootPaths.root} sx={{ display: { md: 'none' } }}>
            <Logo width={27} height={27} />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onHandleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <IconifyIcon icon="quill:hamburger" width={27} height={27} />
          </IconButton>

          <SearchBox />
        </Box>

        <Stack direction="row" columnGap={3.5}>
          <IconButton aria-label="languages" color="inherit">
            <LanguagePopover />
          </IconButton>
          <IconButton aria-label="notifications" color="inherit">
            <OutlinedBadge badgeContent=" " color="error" variant="dot" overlap="circular">
              <Notification fontSize="medium" />
            </OutlinedBadge>
          </IconButton>

          <AccountMenu
            open={open}
            anchorEl={anchorEl}
            onHandleClick={handleClick}
            onHandleClose={handleClose}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
