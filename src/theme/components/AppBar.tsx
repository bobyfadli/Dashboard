import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AppBar: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.neutral.main,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
      borderRadius: 0,
    }),
  },
};

export default AppBar;
