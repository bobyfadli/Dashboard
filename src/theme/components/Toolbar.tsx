import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({ height: theme.spacing(9.75), padding: theme.spacing(0, 3) }),
  },
};

export default Toolbar;
