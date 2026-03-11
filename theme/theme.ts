'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

const baseTypography = {
  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  h1: {
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.05,
  },
  h2: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },
  h3: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h6: {
    fontWeight: 600,
  },
  body1: {
    fontSize: '1.0625rem',
    lineHeight: 1.75,
  },
  body2: {
    fontSize: '0.9375rem',
    lineHeight: 1.7,
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#818CF8',
      light: '#A5B4FC',
      dark: '#6366F1',
    },
    secondary: {
      main: '#22D3EE',
      light: '#67E8F9',
      dark: '#0891B2',
    },
    background: {
      default: '#050508',
      paper: '#0D0D16',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255,255,255,0.06)',
  },
  typography: baseTypography,
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: 'transparent' },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(129, 140, 248, 0.3)',
          borderRadius: 3,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          fontSize: '0.9375rem',
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)',
          boxShadow: '0 0 30px rgba(99, 102, 241, 0.35)',
          '&:hover': {
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.55)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(13, 13, 22, 0.8)',
          border: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
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
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4F46E5',
      light: '#818CF8',
      dark: '#3730A3',
    },
    secondary: {
      main: '#0891B2',
      light: '#22D3EE',
      dark: '#0E7490',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    divider: 'rgba(0,0,0,0.07)',
  },
  typography: baseTypography,
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: 'transparent' },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(79, 70, 229, 0.25)',
          borderRadius: 3,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          fontSize: '0.9375rem',
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          boxShadow: '0 4px 20px rgba(79, 70, 229, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(79, 70, 229, 0.45)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
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
  },
};

export const getDarkTheme = () => createTheme(darkThemeOptions);
export const getLightTheme = () => createTheme(lightThemeOptions);
