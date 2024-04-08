import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: Button,
  },
});
