import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import '@fontsource/inter'; // Defaults to weight 400
import { Auth0Provider } from './components/Auth0Provider'; // Corrected import path

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </ThemeProvider>
);
