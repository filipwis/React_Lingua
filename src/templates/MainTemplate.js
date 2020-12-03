import React from 'react';
import GlobalStyle from '../theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

export default MainTemplate;
