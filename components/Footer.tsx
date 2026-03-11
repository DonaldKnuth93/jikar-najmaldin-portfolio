'use client';

import React from 'react';
import { Box, Container, Typography, Divider, useTheme, IconButton, Tooltip } from '@mui/material';
import { LinkedIn, Twitter, GitHub, FavoriteBorder } from '@mui/icons-material';

const socialLinks = [
  { label: 'LinkedIn', icon: <LinkedIn fontSize="small" />, href: 'https://linkedin.com/in/jikarnajmaldin' },
  { label: 'Twitter', icon: <Twitter fontSize="small" />, href: 'https://twitter.com/jikarnajm' },
  { label: 'GitHub', icon: <GitHub fontSize="small" />, href: 'https://github.com/jikarnajm' },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
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
          {/* Left */}
          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: '0.7rem', color: '#fff' }}>JN</Typography>
              </Box>
              <Typography fontWeight={700} fontSize="0.9375rem">
                Jikar Najmaldin
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} · All rights reserved.
            </Typography>
          </Box>

          {/* Center */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              opacity: 0.6,
            }}
          >
            Built with{' '}
            <FavoriteBorder sx={{ fontSize: '0.85rem', color: '#F472B6' }} />
            {' '}and Next.js
          </Typography>

          {/* Right: social */}
          <Box display="flex" gap={1}>
            {socialLinks.map((s) => (
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
                    borderColor: 'divider',
                    borderRadius: '10px',
                    p: '6px',
                    '&:hover': {
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      background: isDark ? 'rgba(129,140,248,0.08)' : 'rgba(79,70,229,0.06)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
