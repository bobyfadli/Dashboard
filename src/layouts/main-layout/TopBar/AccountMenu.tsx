import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import SignOut from 'components/icons/SignOut';
import { MouseEvent } from 'react';
import avatar from '../../../assets/avatar.png';

interface AccountMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onHandleClick: (event: MouseEvent<HTMLElement>) => void;
  onHandleClose: () => void;
}

const AccountMenu = ({ open, anchorEl, onHandleClick, onHandleClose }: AccountMenuProps) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="User Name">
          <IconButton
            onClick={onHandleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 48, height: 48 }} alt="avatar" src={avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={onHandleClose}
        onClick={onHandleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={onHandleClose}>Profile</MenuItem>
        <MenuItem onClick={onHandleClose}>My account</MenuItem>

        <Divider />

        <MenuItem onClick={onHandleClose}>
          <ListItemIcon>
            <SignOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
