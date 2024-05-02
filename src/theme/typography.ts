import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['DM Sans', 'Inter'].join(','),
  // logo, card box
  h1: {
    fontWeight: 700,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.302, // 31.25px  line-height/font-size
  },

  //login, sign up
  // h2: {
  //   fontWeight: 700,
  //   fontSize: '1.875rem', // 30px
  //   lineHeight: 2.441, // 39.06px
  // },

  //statistics, car brand
  h3: {
    fontWeight: 700,
    fontSize: '1.25rem', // 20px
    lineHeight: 1.302, //26.04px
  },
  // h4: {
  //   fontWeight: 400,
  //   fontSize: '1.125rem', // 18px
  //   lineHeight: 1.465, // 23.44px
  // },
  // h5: {
  //   fontWeight: 700,
  //   fontSize: '1.125rem', // 18px
  //   lineHeight: 1.465, // 23.44px
  // },
  // h6: {
  //   fontWeight: 700,
  //   fontSize: '1rem', // 16px
  //   lineHeight: 1.25, // 20.83px
  // },
  // subtitle1: {
  //   fontWeight: 400,
  //   fontSize: '1rem', // 16px
  //   lineHeight: 1.3,
  // },

  //20 February 2022
  subtitle2: {
    fontWeight: 700,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.302, // 18.23px
  },

  //car section - 64% recommended
  body1: {
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: 1.301, // 20.83px
  },

  body2: {
    fontWeight: 500,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.302, // 18.23px
  },
  // button: {
  //   fontWeight: 500,
  //   fontSize: '1.125rem', // 18px
  //   lineHeight: 1.465, // 23.44px
  //   textTransform: 'none',
  // },
  // caption: {
  //   fontWeight: 400,
  //   fontSize: '0.75rem', // 12px
  //   lineHeight: 1.2,
  // },
  // overline: {
  //   fontWeight: 400,
  //   fontSize: '0.75rem', // 12px
  //   lineHeight: 1.2,
  //   textTransform: 'uppercase',
  // },
};

export default typography;
