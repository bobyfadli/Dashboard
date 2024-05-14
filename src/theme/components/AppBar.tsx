import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AppBar: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: {},
  styleOverrides: {
    colorPrimary: ({ theme }) => ({
      color: theme.palette.neutral.main,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
      borderRadius: 0,

      // padding: theme.spacing(0, 1),
    }),
  },
};

export default AppBar;
