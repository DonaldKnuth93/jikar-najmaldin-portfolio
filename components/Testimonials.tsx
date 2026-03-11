'use client';

import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: 'Jikar has a rare ability to translate complex business challenges into elegant platform solutions. His work on our investment network architecture was exceptional — the product launched in half the time we expected.',
    name: 'David Chen',
    role: 'Managing Partner',
    company: 'EuroVenture Capital',
    initials: 'DC',
    accent: '#818CF8',
  },
  {
    quote: "Working with Jikar completely changed how we approach our B2B platform. His go-to-market framework helped us enter three new markets in six months. One of the sharpest strategic minds I've encountered.",
    name: 'Laura Zimmermann',
    role: 'CEO',
    company: 'FinanceHub AG',
    initials: 'LZ',
    accent: '#22D3EE',
  },
  {
    quote: "Jikar doesn't just build products — he builds ecosystems. His strategic thinking consistently reveals market opportunities we'd overlooked. A trusted partner for any ambitious founding team.",
    name: 'Yusuf Al-Hassan',
    role: 'Co-Founder',
    company: 'TechScale MENA',
    initials: 'YA',
    accent: '#34D399',
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const gradSx = {
    background: isDark
      ? 'linear-gradient(135deg, #818CF8 0%, #22D3EE 100%)'
      : 'linear-gradient(135deg, #6366F1 0%, #0891B2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 12, md: 18 },
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(180deg, transparent 0%, rgba(13,13,26,0.5) 50%, transparent 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(238,238,248,0.4) 50%, transparent 100%)',
      }}
    >
      {/* Background accent */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)'
          : 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 65%)',
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
            <Typography sx={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', mb: 3, display: 'block',
              color: isDark ? 'rgba(129,140,248,0.8)' : 'rgba(79,70,229,0.8)',
            }}>
              Testimonials
            </Typography>
            <Typography variant="h2" sx={{ color: 'text.primary' }}>
              What people{' '}
              <Box component="span" sx={gradSx}>are saying.</Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Cards */}
        <Grid container spacing={3}>
          {TESTIMONIALS.map((t, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={t.name}>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4 },
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
                    background: isDark ? '#0D0D1A' : '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: t.accent + '45',
                      transform: 'translateY(-4px)',
                      boxShadow: isDark
                        ? `0 24px 60px ${t.accent}12`
                        : `0 20px 50px rgba(0,0,0,0.1)`,
                    },
                  }}
                >
                  {/* Quote icon */}
                  <Box sx={{
                    width: 40, height: 40, borderRadius: '11px',
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: t.accent, flexShrink: 0,
                  }}>
                    <FormatQuote sx={{ fontSize: '1.2rem' }} />
                  </Box>

                  {/* Quote */}
                  <Typography sx={{
                    fontSize: '0.9625rem', color: 'text.secondary',
                    lineHeight: 1.8, flex: 1, fontStyle: 'italic',
                  }}>
                    "{t.quote}"
                  </Typography>

                  {/* Author */}
                  <Box sx={{
                    pt: 2.5, borderTop: '1px solid', borderColor: 'divider',
                    display: 'flex', alignItems: 'center', gap: 2,
                  }}>
                    {/* Avatar */}
                    <Box sx={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>
                        {t.initials}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: 'text.primary', lineHeight: 1.3 }}>
                        {t.name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>
                        {t.role} · {t.company}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
