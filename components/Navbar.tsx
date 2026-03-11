'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  Typography,
  Tooltip,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, LightMode, DarkMode } from '@mui/icons-material';
import { useColorMode } from './ThemeRegistry';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 100 });
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          sx={{
            background: scrolled
              ? mode === 'dark'
                ? 'rgba(5, 5, 8, 0.85)'
                : 'rgba(248, 250, 252, 0.85)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderBottom: scrolled
              ? mode === 'dark'
                ? '1px solid rgba(255,255,255,0.06)'
                : '1px solid rgba(0,0,0,0.06)'
              : '1px solid transparent',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ height: 70, justifyContent: 'space-between' }}>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>
                      JN
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      display: { xs: 'none', sm: 'block' },
                      color: 'text.primary',
                    }}
                  >
                    Jikar Najmaldin
                  </Typography>
                </Box>
              </motion.div>

              {/* Desktop nav */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Button
                      onClick={() => handleNavClick(link.href)}
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        px: 2,
                        '&:hover': {
                          color: 'primary.main',
                          background: 'transparent',
                        },
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                ))}

                <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
                  <IconButton
                    onClick={toggleColorMode}
                    size="small"
                    sx={{
                      ml: 1,
                      color: 'text.secondary',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '10px',
                      p: '6px',
                      '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                      transition: 'all 0.2s',
                    }}
                  >
                    {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                  </IconButton>
                </Tooltip>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleNavClick('#contact')}
                  sx={{ ml: 2, fontSize: '0.875rem' }}
                >
                  Get in touch
                </Button>
              </Box>

              {/* Mobile */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                <IconButton onClick={toggleColorMode} size="small" sx={{ color: 'text.secondary' }}>
                  {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                </IconButton>
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: mode === 'dark' ? '#0D0D16' : '#FFFFFF',
            p: 3,
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography fontWeight={700} fontSize="1.1rem">
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{ borderRadius: 2, mb: 1 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box mt="auto" pt={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavClick('#contact')}
          >
            Get in touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
