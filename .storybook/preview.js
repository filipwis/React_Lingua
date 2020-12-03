import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((story) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </>
  );
});
