import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: { disableGutters: true },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1.875, 3.875),
      height: theme.spacing(9.75),
    }),
  },
};

export default Toolbar;
