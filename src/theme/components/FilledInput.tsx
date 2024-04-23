import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 2,
      padding: '12px 14px',
      fontWeight: 500,
      lineHeight: 1.3,
      '& .MuiFilledInput-input': {
        padding: 0,
      },
      '& .MuiFilledInput-input::placeholder': {
        color: theme.palette.neutral.main,
        opacity: 1,
      },
    }),
  },
};

export default FilledInput;
