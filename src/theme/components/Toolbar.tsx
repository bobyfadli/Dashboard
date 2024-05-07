import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 3),
    }),

    gutters: ({ theme }) => ({
      padding: `${theme.spacing(0, 3.875)} !important`,
    }),
  },
};

export default Toolbar;
