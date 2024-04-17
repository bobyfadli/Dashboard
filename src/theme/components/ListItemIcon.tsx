import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { gray } from 'theme/colors';

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      color: gray[600],
      minWidth: '20px',
      marginRight: '8px',
    },
  },
};

export default ListItemIcon;
