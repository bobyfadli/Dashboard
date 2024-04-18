import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: {
      borderRadius: '0.5rem',
      '& .MuiFilledInput-input': {
        padding: 0,
        width: '22.375rem',
        height: '2.875rem',
      },
    },
  },
};

export default FilledInput;
