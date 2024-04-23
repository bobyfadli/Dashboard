import { Components, Theme } from '@mui/material';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 1.5,
      padding: '7px 8px',
    }),
  },
};
export default ListItemButton;
