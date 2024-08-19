'use client';

import { colors } from './data';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[100],
      light: colors.primary[200],
      dark: colors.primary[700],
      contrastText: colors.primary[300],
    },
    secondary: {
      main: colors.secondary[100],
      light: colors.secondary[200],
      dark: colors.secondary[700],
      contrastText: colors.secondary[500],
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
