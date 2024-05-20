import { Components, Theme } from '@mui/material';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
    },

    text: ({ theme }) => ({
      color: theme.palette.grey[700],
    }),

    sizeSmall: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 6,
      fontSize: theme.typography.fontSize / 1.4,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0.406, 1.5),
      minWidth: 'auto',
    }),

    sizeLarge: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 2,
      height: 60,
    }),

    outlinedSizeLarge: ({ theme }) => ({
      padding: theme.spacing(2.25, 3.75),
    }),

    outlinedPrimary: ({ theme }) => ({
      color: theme.palette.neutral.dark,
      borderColor: theme.palette.grey.A400,
    }),

    // startIcon: {
    //   '& > *:first-of-type': {
    //     fontSize: 20,
    //   },
    // },
    // endIcon: {
    //   '& > *:first-of-type': {
    //     fontSize: 14,
    //   },
    // },

    // iconSizeLarge: ({ theme }) => ({
    //   '& > *:first-of-type': {
    //     fontSize: theme.typography.fontSize + 6,
    //   },
    // }),
  },
};

export default Button;
