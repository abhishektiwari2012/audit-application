import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import AuditApplication from './modules/audit-application';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuditApplication />
    </ThemeProvider>
  );
};

export default App;
