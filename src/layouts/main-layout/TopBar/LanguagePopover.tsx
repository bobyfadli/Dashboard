import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { MouseEvent, useState } from 'react';
import IconifyIcon from 'components/base/IconifyIcon';
import { ListItemIcon, Menu, Typography } from '@mui/material';

const languages = [
  {
    id: 0,
    value: 'ban',
    label: 'Bengali',
    icon: 'twemoji:flag-bangladesh',
  },
  { id: 1, value: 'en', label: 'English', icon: 'twemoji:flag-england' },

  { id: 2, value: 'fr', label: 'French', icon: 'twemoji:flag-france' },
];

const LanguagePopover = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: number,
  ) => {
    setSelectedIndex(id);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="language" color="inherit" onClick={handleClickItem}>
        <IconifyIcon icon={languages[selectedIndex].icon} />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((option) => (
          <MenuItem
            key={option.id}
            selected={option.id === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, option.id)}
          >
            <ListItemIcon>
              <IconifyIcon icon={option.icon} />
            </ListItemIcon>
            <Typography variant="body2">{option.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguagePopover;
