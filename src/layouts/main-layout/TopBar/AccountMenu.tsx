import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';

import { MouseEvent } from 'react';
import avatar from 'assets/avatar.png';
import IconifyIcon from 'components/base/IconifyIcon';

interface AccountMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onHandleClick: (event: MouseEvent<HTMLElement>) => void;
  onHandleClose: () => void;
}

const AccountMenu = ({ open, anchorEl, onHandleClick, onHandleClose }: AccountMenuProps) => {
  return (
    <>
      <IconButton
        onClick={onHandleClick}
        color="inherit"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={(theme) => ({ ml: { xs: 1, sm: 2, md: theme.spacing(2.875) } })}
      >
        <Avatar sx={{ width: 40, height: 40 }} alt="avatar" src={avatar} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={onHandleClose}
        onClick={onHandleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={onHandleClose}>
          <ListItemIcon>
            <IconifyIcon icon="material-symbols:person" />
          </ListItemIcon>
          <Typography variant="body2">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={onHandleClose}>
          <ListItemIcon>
            <IconifyIcon icon="material-symbols:account-box-sharp" />
          </ListItemIcon>
          <Typography variant="body2">My account</Typography>
        </MenuItem>

        <MenuItem onClick={onHandleClose}>
          <ListItemIcon>
            <IconifyIcon icon="uiw:logout" color="error.main" />
          </ListItemIcon>
          <Typography variant="body2">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
