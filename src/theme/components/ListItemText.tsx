import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
  defaultProps: { disableTypography: true },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[700],
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '18.23px',
    }),
  },
};

export default ListItemText;
