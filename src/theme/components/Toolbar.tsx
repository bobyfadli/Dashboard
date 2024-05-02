import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(3),
    }),
  },
};

export default Toolbar;
