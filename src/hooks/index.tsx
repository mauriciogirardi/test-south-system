import React from 'react';

import { ToastProvider } from './toast';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);

export default AppProvider;
