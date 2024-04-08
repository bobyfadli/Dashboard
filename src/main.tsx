import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/router.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
