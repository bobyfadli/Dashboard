import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';

import { MouseEvent } from 'react';
import avatar from '../../../assets/avatar.png';
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
        sx={{ ml: 3 }}
      >
        <Avatar sx={{ width: 48, height: 48 }} alt="avatar" src={avatar} />
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
          <Typography variant="body2">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={onHandleClose}>
          <Typography variant="body2">My account</Typography>
        </MenuItem>

        <Divider />

        <MenuItem onClick={onHandleClose}>
          <ListItemIcon>
            <IconifyIcon icon="uiw:logout" fontSize="large" color="error.main" />
          </ListItemIcon>
          <Typography variant="body2">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
