'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Container, Drawer, List, ListItem, ListItemButton,
  ListItemText, Typography, Tooltip, Slide,
  useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, LightMode, DarkMode } from '@mui/icons-material';
import { useColorMode } from './ThemeRegistry';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 120 });
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = mode === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setDrawerOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          sx={{
            background: scrolled
              ? isDark ? 'rgba(4,4,10,0.88)' : 'rgba(247,247,248,0.88)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            borderBottom: scrolled
              ? `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'}`
              : '1px solid transparent',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ height: 68, justifyContent: 'space-between' }}>
              {/* Logo */}
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Box
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1.25 }}
                >
                  <Box sx={{
                    width: 32, height: 32, borderRadius: '9px',
                    background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: '#fff' }}>JN</Typography>
                  </Box>
                  <Typography sx={{
                    fontWeight: 700, fontSize: '0.9375rem', color: 'text.primary',
                    display: { xs: 'none', sm: 'block' },
                  }}>
                    Jikar Najmaldin
                  </Typography>
                </Box>
              </motion.div>

              {/* Desktop nav */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <Button
                      onClick={() => handleNav(link.href)}
                      sx={{
                        color: 'text.secondary', fontWeight: 500, fontSize: '0.875rem',
                        px: 2, py: 1,
                        '&:hover': { color: 'text.primary', background: 'transparent' },
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                ))}

                <Tooltip title={isDark ? 'Light mode' : 'Dark mode'}>
                  <IconButton
                    onClick={toggleColorMode}
                    size="small"
                    sx={{
                      ml: 1, color: 'text.secondary',
                      border: '1px solid', borderColor: 'divider', borderRadius: '9px', p: '6px',
                      '&:hover': { color: 'text.primary', borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' },
                      transition: 'all 0.2s',
                    }}
                  >
                    {isDark ? <LightMode sx={{ fontSize: '1rem' }} /> : <DarkMode sx={{ fontSize: '1rem' }} />}
                  </IconButton>
                </Tooltip>

                <Button
                  variant="contained"
                  onClick={() => handleNav('#contact')}
                  sx={{ ml: 2, fontSize: '0.875rem', py: 1 }}
                >
                  Get in touch
                </Button>
              </Box>

              {/* Mobile */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
                <IconButton
                  onClick={toggleColorMode}
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid', borderColor: 'divider', borderRadius: '9px', p: '6px',
                  }}
                >
                  {isDark ? <LightMode sx={{ fontSize: '1rem' }} /> : <DarkMode sx={{ fontSize: '1rem' }} />}
                </IconButton>
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary', ml: 0.5 }}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            background: isDark ? '#0D0D1A' : '#FFFFFF',
            borderLeft: '1px solid',
            borderColor: 'divider',
            p: 3,
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box sx={{
              width: 28, height: 28, borderRadius: '8px',
              background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Typography sx={{ fontWeight: 800, fontSize: '0.7rem', color: '#fff' }}>JN</Typography>
            </Box>
            <Typography fontWeight={700} fontSize="0.9375rem">Jikar Najmaldin</Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ p: 0 }}>
          {NAV_LINKS.map(link => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => handleNav(link.href)}
                sx={{ borderRadius: '10px', mb: 0.5, py: 1.5 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box mt="auto" pt={5}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => handleNav('#contact')}
            sx={{ py: 1.5 }}
          >
            Get in touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
