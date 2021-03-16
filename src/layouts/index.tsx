import React, { ReactNode } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import NavigationProvider from 'contexts/NavigationContext';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationProvider>{children}</NavigationProvider>
    </ThemeProvider>
  );
};

export default Layout;
