import { Avatar, Badge, IconButton, Menu, MenuItem, MenuProps } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import avatar from '../../assets/avatar.png';

interface Props extends MenuProps {
  anchorEl: HTMLElement | null;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu: React.FC<Props> = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  handleProfileMenuOpen,
}: Props) => {
  return (
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
};

export default MobileMenu;
