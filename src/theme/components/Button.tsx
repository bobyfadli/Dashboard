import { Components, Theme } from '@mui/material';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
      padding: 0,
      //   fontSize: '14px',
      //   borderRadius: '8px',
      //   padding: theme.spacing(1, 2),
      //   lineHeight: 1.429,
    },

    // sizeLarge: {
    //   fontSize: '16px',
    //   padding: '10px 22px',
    //   lineHeight: 1.375,
    // },
    sizeSmall: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 6,
      fontSize: theme.typography.fontSize * 0.714,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.302,
      minWidth: 43,
      height: 20,
      color: theme.palette.grey[700],
    }),

    containedPrimary: {
      color: 'white !important',
    },

    // outlinedSizeLarge: {
    //   paddingTop: '9px',
    //   paddingBottom: '9px',
    // },
    // outlinedSizeMedium: {
    //   paddingTop: '7px',
    //   paddingBottom: '7px',
    // },
    // outlinedSizeSmall: {
    //   paddingTop: '5px',
    //   paddingBottom: '5px',
    // },

    // startIcon: {
    //   '& > *:first-of-type': {
    //     fontSize: 14,
    //   },
    // },
    // endIcon: {
    //   '& > *:first-of-type': {
    //     fontSize: 14,
    //   },
    // },
    // iconSizeLarge: {
    //   '& > *:first-of-type': {
    //     fontSize: 16,
    //   },
    // },
  },
};

export default Button;
