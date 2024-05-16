import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Input: Components<Omit<Theme, 'components'>>['MuiInput'] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {},
};

export default Input;
