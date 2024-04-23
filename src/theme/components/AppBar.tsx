import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AppBar: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.neutral.main,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
      height: theme.spacing(9.75),
      borderRadius: 0,
      // justifyContent: 'center',
    }),
  },
};

export default AppBar;
