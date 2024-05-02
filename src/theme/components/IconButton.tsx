import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const IconButton: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    // root: (theme) => ({ p: 0 })
  },
};

export default IconButton;
