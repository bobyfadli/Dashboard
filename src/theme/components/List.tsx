import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const List: Components<Omit<Theme, 'components'>>['MuiList'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({ padding: theme.spacing(2, 6.25, 3.75, 3) }),
  },
};

export default List;
