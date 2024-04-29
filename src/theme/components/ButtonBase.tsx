import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ButtonBase: Components<Omit<Theme, 'components'>>['MuiButtonBase'] = {
  defaultProps: {},
  styleOverrides: {},
};

export default ButtonBase;
