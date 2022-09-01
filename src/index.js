import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ theme, variables }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
