'use client';

import React from 'react';
import { Box, Container, Typography, IconButton, Tooltip, useTheme } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';

const NAV = ['About', 'Ventures', 'Skills', 'Contact'];

const SOCIALS = [
  { label: 'LinkedIn', Icon: LinkedIn, href: 'https://linkedin.com/in/jikarnajmaldin' },
  { label: 'Twitter', Icon: Twitter, href: 'https://twitter.com/jikarnajm' },
  { label: 'GitHub', Icon: GitHub, href: 'https://github.com/jikarnajm' },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleNavClick = (section: string) => {
    document.querySelector(`#${section.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {/* Left: brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: '9px',
                background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#fff' }}>
                JN
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: 'text.primary' }}>
                Jikar Najmaldin
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', opacity: 0.6 }}>
                © {new Date().getFullYear()} · All rights reserved
              </Typography>
            </Box>
          </Box>

          {/* Center: nav links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
            }}
          >
            {NAV.map((item) => (
              <Typography
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'text.secondary',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Right: socials */}
          <Box sx={{ display: 'flex', gap: 0.75 }}>
            {SOCIALS.map((s) => (
              <Tooltip key={s.label} title={s.label}>
                <IconButton
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    p: '7px',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'text.primary',
                      borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                      background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    },
                  }}
                >
                  <s.Icon sx={{ fontSize: '0.95rem' }} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
