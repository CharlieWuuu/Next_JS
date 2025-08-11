// src/theme/theme.ts
'use client';

import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

// Create a custom theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blue[700], // Set the primary color to a shade of blue
    },
    secondary: {
      main: '#19857b', // A custom secondary color
    },
    error: {
      main: red.A400, // The error color is set to a bright red
    },
    background: {
      default: '#f4f6f8', // A light grey background for the app
    },
  },
  typography: {
    // Define a global font family
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    // Customize individual MUI components here
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Give all buttons a rounded border
        },
      },
    },
  },
});

export default theme;
