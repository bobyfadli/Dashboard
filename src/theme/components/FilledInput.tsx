import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 2,
      paddingLeft: theme.spacing(1.75),
    }),

    input: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightMedium,
      // lineHeight: 1.3,
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      color: theme.palette.neutral.main,

      '&::placeholder': {
        color: theme.palette.neutral.main,
        opacity: 1,
      },
    }),

    adornedStart: ({ theme }) => ({ backgroundColor: theme.palette.neutral.lighter }),
  },
};

export default FilledInput;
