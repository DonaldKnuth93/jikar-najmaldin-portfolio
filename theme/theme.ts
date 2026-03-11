'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

const baseTypography = {
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  h1: {
    fontSize: 'clamp(3rem, 8vw, 7.5rem)',
    fontWeight: 800,
    letterSpacing: '-0.05em',
    lineHeight: 1.0,
  },
  h2: {
    fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
    fontWeight: 700,
    letterSpacing: '-0.035em',
    lineHeight: 1.1,
  },
  h3: {
    fontSize: 'clamp(1.35rem, 2.5vw, 1.875rem)',
    fontWeight: 700,
    letterSpacing: '-0.025em',
    lineHeight: 1.25,
  },
  h4: {
    fontSize: 'clamp(1.1rem, 2vw, 1.375rem)',
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
    background: { default: '#04040A', paper: '#0D0D1A' },
    text: { primary: '#F1F5F9', secondary: '#64748B' },
    divider: 'rgba(255,255,255,0.07)',
  },
  typography: baseTypography,
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: '#04040A' },
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
          color: '#fff',
          boxShadow: '0 0 24px rgba(99,102,241,0.3)',
          '&:hover': {
            boxShadow: '0 0 36px rgba(99,102,241,0.5)',
            transform: 'translateY(-1px)',
            background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(129,140,248,0.3)',
          color: '#818CF8',
          '&:hover': {
            borderColor: '#818CF8',
            background: 'rgba(129,140,248,0.07)',
          },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } } },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '& fieldset': { borderColor: 'rgba(255,255,255,0.09)' },
            '&:hover fieldset': { borderColor: 'rgba(129,140,248,0.4)' },
            '&.Mui-focused fieldset': { borderColor: '#818CF8', borderWidth: 1 },
          },
          '& .MuiInputLabel-root': { color: '#64748B' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#818CF8' },
          '& .MuiInputBase-input': { color: '#F1F5F9' },
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
    background: { default: '#F7F7F8', paper: '#FFFFFF' },
    text: { primary: '#0D0D1A', secondary: '#5E6474' },
    divider: 'rgba(0,0,0,0.08)',
  },
  typography: baseTypography,
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: '#F7F7F8' },
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
          color: '#fff',
          boxShadow: '0 4px 20px rgba(79,70,229,0.28)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(79,70,229,0.42)',
            transform: 'translateY(-1px)',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(79,70,229,0.3)',
          color: '#4F46E5',
          '&:hover': {
            borderColor: '#4F46E5',
            background: 'rgba(79,70,229,0.05)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } } },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            background: '#FFFFFF',
            '& fieldset': { borderColor: 'rgba(0,0,0,0.12)' },
            '&:hover fieldset': { borderColor: 'rgba(79,70,229,0.4)' },
            '&.Mui-focused fieldset': { borderColor: '#4F46E5', borderWidth: 1 },
          },
          '& .MuiInputLabel-root': { color: '#5E6474' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#4F46E5' },
          '& .MuiInputBase-input': { color: '#0D0D1A' },
        },
      },
    },
  },
};

export const getDarkTheme = () => createTheme(darkThemeOptions);
export const getLightTheme = () => createTheme(lightThemeOptions);
