import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { gray, blue, purple, red, orange } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

const palette: PaletteOptions = {
  text: {
    primary: gray[800], //! factors-text, statistics-text, car-recommended-title, sign in with google, email, password
    secondary: gray[400], //* text => or, email placeholder
    // disabled: gray[400],
  },

  action: {
    active: gray[200],
    hover: gray[200],
    // selected: gray[100],
    // disabled: gray[400],
    // disabledBackground: gray[200],
    // focus: gray[300],
  },

  neutral: {
    lighter: gray[50],
    light: gray[300],
    main: gray[500],
    dark: gray[800],
    darker: gray[900],
    contrastText: '#fff',
  },

  primary: {
    light: blue[400],
    main: blue[500],
    dark: blue[600],
  },

  secondary: {
    main: purple[500],
  },

  grey: {
    500: '#353945', // login-subtitle
    600: gray[600], // nav-icon, car-icon, table-heading
    700: gray[700],
    900: '#000000', //  Reminder
  },
  error: {
    lighter: red[50],
    light: red[300],
    main: red[500],
    dark: red[600],
    darker: red[900],
  },
  warning: {
    lighter: orange[50],
    light: orange[400],
    main: orange[500],
    dark: orange[700],
    darker: orange[900],
    contrastText: '#fff',
  },
  // success: {
  //   lighter: green[50],
  //   light: green[400],
  //   main: green[500],
  //   dark: green[700],
  //   darker: green[900],
  // },
  // info: {
  //   lighter: cyan[50],
  //   light: cyan[300],
  //   main: cyan[500],
  //   dark: cyan[700],
  //   darker: cyan[900],
  //   contrastText: '#fff',
  // },
};

export default palette;
