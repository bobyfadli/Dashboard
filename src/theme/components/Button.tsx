import { Components, Theme } from '@mui/material';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
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
    // sizeSmall: {
    //   padding: '10px 12px',
    //   lineHeight: 0.814,
    //   width: '43px',
    //   height: '20px',
    // },
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
