import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: { disableGutters: true },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1.875, 3.875),
      height: 78,
    }),
  },
};

export default Toolbar;
