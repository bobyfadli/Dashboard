import { Components, Theme } from '@mui/material';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      width: '10.875rem',
      height: '2.125rem',
      borderRadius: '0.375rem',
      padding: '7px 8px',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    }),
  },
};
export default ListItemButton;
