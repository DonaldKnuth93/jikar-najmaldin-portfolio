'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

const baseTypography = {
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  h1: {
    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
    fontWeight: 800,
    letterSpacing: '-0.05em',
    lineHeight: 1.0,
  },
  h2: {
    fontSize: 'clamp(2rem, 5vw, 3.75rem)',
    fontWeight: 700,
    letterSpacing: '-0.035em',
    lineHeight: 1.1,
  },
  h3: {
    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
    fontWeight: 600,
    letterSpacing: '-0.025em',
    lineHeight: 1.2,
  },
  h4: {
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h5: { fontWeight: 600, letterSpacing: '-0.015em' },
  h6: { fontWeight: 600, letterSpacing: '-0.01em' },
  body1: { fontSize: '1.0625rem', lineHeight: 1.75 },
  body2: { fontSize: '0.9375rem', lineHeight: 1.7 },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: '#818CF8', light: '#A5B4FC', dark: '#6366F1' },
    secondary: { main: '#22D3EE', light: '#67E8F9', dark: '#0891B2' },
    background: { default: '#04040A', paper: '#0B0B14' },
    text: { primary: '#F1F5F9', secondary: '#64748B' },
    divider: 'rgba(255,255,255,0.06)',
  },
  typography: baseTypography,
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        '::-webkit-scrollbar': { width: 5 },
        '::-webkit-scrollbar-track': { background: 'transparent' },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(129, 140, 248, 0.2)',
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 600,
          fontSize: '0.9375rem',
          padding: '10px 22px',
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)',
          boxShadow: '0 0 24px rgba(99,102,241,0.30)',
          '&:hover': {
            boxShadow: '0 0 36px rgba(99,102,241,0.50)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(129,140,248,0.3)',
          '&:hover': {
            borderColor: '#818CF8',
            background: 'rgba(129,140,248,0.06)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '& fieldset': { borderColor: 'rgba(255,255,255,0.08)' },
            '&:hover fieldset': { borderColor: 'rgba(129,140,248,0.4)' },
            '&.Mui-focused fieldset': { borderColor: '#818CF8' },
          },
          '& .MuiInputLabel-root': { color: '#64748B' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#818CF8' },
        },
      },
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#4F46E5', light: '#818CF8', dark: '#3730A3' },
    secondary: { main: '#0891B2', light: '#22D3EE', dark: '#0E7490' },
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
    text: { primary: '#0F172A', secondary: '#64748B' },
    divider: 'rgba(0,0,0,0.07)',
  },
  typography: baseTypography,
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        '::-webkit-scrollbar': { width: 5 },
        '::-webkit-scrollbar-track': { background: 'transparent' },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(79,70,229,0.2)',
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 600,
          fontSize: '0.9375rem',
          padding: '10px 22px',
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          boxShadow: '0 4px 20px rgba(79,70,229,0.28)',
          '&:hover': {
            boxShadow: '0 8px 28px rgba(79,70,229,0.42)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(79,70,229,0.3)',
          '&:hover': {
            borderColor: '#4F46E5',
            background: 'rgba(79,70,229,0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '& fieldset': { borderColor: 'rgba(0,0,0,0.12)' },
            '&:hover fieldset': { borderColor: 'rgba(79,70,229,0.4)' },
            '&.Mui-focused fieldset': { borderColor: '#4F46E5' },
          },
        },
      },
    },
  },
};

export const getDarkTheme = () => createTheme(darkThemeOptions);
export const getLightTheme = () => createTheme(lightThemeOptions);
