import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/router.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
