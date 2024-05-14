import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  defaultProps: {},
  styleOverrides: {
    labelPlacementTop: {
      margin: 0,
      alignItems: 'start',
      width: '100%',
    },
  },
};

export default FormControlLabel;
