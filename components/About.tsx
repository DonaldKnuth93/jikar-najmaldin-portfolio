'use client';

import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const FACTS = [
  { label: 'Based in', value: 'Europe' },
  { label: 'Focus', value: 'B2B & Fintech' },
  { label: 'Building since', value: '2020' },
  { label: 'Markets', value: 'Global & CH' },
];

const PILLARS = [
  {
    number: '01',
    title: 'Ship fast. Learn faster.',
    desc: 'Every product starts with a problem worth solving. I believe in moving quickly, shipping early, and iterating relentlessly based on real feedback.',
  },
  {
    number: '02',
    title: 'People are everything.',
    desc: 'Great products are built by great teams, for real people. Human connection — between founders, users, and communities — is the core of every venture I build.',
  },
  {
    number: '03',
    title: 'Think global from day one.',
    desc: 'I build for borders that don\'t exist. Whether it\'s business matchmaking or insurance tech, the products I create are designed to scale across markets.',
  },
];

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const gradientStyle = {
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
      id="about"
      sx={{
        py: { xs: 12, md: 18 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-8%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(8,145,178,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 7 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isDark ? 'rgba(129,140,248,0.7)' : 'rgba(79,70,229,0.7)',
              }}
            >
              About
            </Typography>
            <Box sx={{ flex: 1, height: '1px', background: 'divider', bgcolor: 'divider', maxWidth: 60 }} />
          </Box>
        </motion.div>

        {/* Main content: 2-col */}
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          {/* Left: Bio */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
                Turning bold ideas into{' '}
                <Box component="span" sx={gradientStyle}>
                  real companies.
                </Box>
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Typography
                  sx={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'text.secondary' }}
                >
                  I'm Jikar Najmaldin — an entrepreneur who thrives at the intersection of
                  technology, business, and global opportunity. I don't just build products;
                  I build ecosystems that empower people to achieve more.
                </Typography>
                <Typography
                  sx={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'text.secondary' }}
                >
                  From connecting businesses worldwide via{' '}
                  <Box
                    component="span"
                    sx={{ color: isDark ? '#A5B4FC' : '#4F46E5', fontWeight: 600 }}
                  >
                    Connectly24
                  </Box>{' '}
                  to disrupting the Swiss insurance market with{' '}
                  <Box
                    component="span"
                    sx={{ color: isDark ? '#67E8F9' : '#0891B2', fontWeight: 600 }}
                  >
                    FinWolf
                  </Box>
                  , my mission is always the same: build things that genuinely matter.
                </Typography>
              </Box>

              {/* Quick facts */}
              <Box
                sx={{
                  mt: 5,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 2,
                }}
              >
                {FACTS.map((fact) => (
                  <Box
                    key={fact.label}
                    sx={{
                      p: 2.5,
                      borderRadius: 2.5,
                      border: '1px solid',
                      borderColor: 'divider',
                      background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        mb: 0.75,
                        opacity: 0.7,
                      }}
                    >
                      {fact.label}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9375rem' }}>
                      {fact.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Pillars */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      py: 4,
                      pl: { xs: 0, md: 2 },
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:first-of-type': { borderTop: '1px solid', borderTopColor: 'divider' },
                      display: 'flex',
                      gap: 3,
                      alignItems: 'flex-start',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        pl: { xs: 0, md: 3.5 },
                        '& .pillar-number': { color: 'primary.main' },
                      },
                    }}
                  >
                    <Typography
                      className="pillar-number"
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'text.secondary',
                        opacity: 0.5,
                        flexShrink: 0,
                        mt: 0.5,
                        fontVariantNumeric: 'tabular-nums',
                        transition: 'color 0.25s',
                      }}
                    >
                      {pillar.number}
                    </Typography>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'text.primary',
                          mb: 1,
                        }}
                      >
                        {pillar.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.9375rem',
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        {pillar.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
