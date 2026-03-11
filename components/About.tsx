'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button, useTheme } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const STATS = [
  { value: '2+', label: 'Ventures launched' },
  { value: '10K+', label: 'Users across platforms' },
  { value: '30+', label: 'Countries reached' },
  { value: '4+', label: 'Years building' },
];

export default function About() {
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
      id="about"
      sx={{ py: { xs: 12, md: 18 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Accent orb */}
      <Box sx={{
        position: 'absolute', top: '30%', right: '-8%',
        width: 600, height: 600, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left: Profile visual */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Avatar placeholder */}
              <Box sx={{ mb: 4, position: 'relative', display: 'inline-block' }}>
                <Box sx={{
                  width: { xs: 120, md: 140 },
                  height: { xs: 120, md: 140 },
                  borderRadius: '30px',
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(34,211,238,0.12))'
                    : 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(8,145,178,0.1))',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(129,140,248,0.2)' : 'rgba(79,70,229,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Typography sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    ...gradSx,
                  }}>
                    JN
                  </Typography>
                </Box>
                {/* Status dot */}
                <Box sx={{
                  position: 'absolute', bottom: 6, right: 6,
                  width: 16, height: 16, borderRadius: '50%',
                  background: '#22C55E',
                  boxShadow: `0 0 0 3px ${isDark ? '#0D0D1A' : '#F7F7F8'}`,
                }} />
              </Box>

              <Typography variant="h3" sx={{ color: 'text.primary', mb: 0.75, fontWeight: 800 }}>
                Jikar Najmaldin
              </Typography>
              <Typography sx={{ fontSize: '1rem', color: 'text.secondary', mb: 4 }}>
                Serial Entrepreneur · Product Strategist · Founder
              </Typography>

              {/* Stats grid */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
                {STATS.map(s => (
                  <Box key={s.label} sx={{
                    p: 2.5, borderRadius: '14px',
                    border: '1px solid', borderColor: 'divider',
                    background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  }}>
                    <Typography sx={{
                      fontWeight: 800, fontSize: '1.5rem',
                      letterSpacing: '-0.04em', lineHeight: 1, mb: 0.5,
                      ...gradSx,
                    }}>
                      {s.value}
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', fontWeight: 500 }}>
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Bio */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography sx={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', mb: 3, display: 'block',
                color: isDark ? 'rgba(129,140,248,0.8)' : 'rgba(79,70,229,0.8)',
              }}>
                About me
              </Typography>

              <Typography variant="h2" sx={{ color: 'text.primary', mb: 4 }}>
                I build platforms that{' '}
                <Box component="span" sx={gradSx}>connect the world.</Box>
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Typography sx={{ fontSize: '1.0625rem', color: 'text.secondary', lineHeight: 1.8 }}>
                  I'm a serial entrepreneur with a focus on building scalable digital platforms
                  that solve real-world problems. Over the past four years, I've launched ventures
                  across B2B matchmaking and fintech — reaching users across 30+ countries.
                </Typography>
                <Typography sx={{ fontSize: '1.0625rem', color: 'text.secondary', lineHeight: 1.8 }}>
                  Through <Box component="span" sx={{ color: isDark ? '#A5B4FC' : '#4F46E5', fontWeight: 600 }}>Connectly24</Box>, I built a global business matchmaking ecosystem
                  connecting entrepreneurs, investors, and enterprises. With{' '}
                  <Box component="span" sx={{ color: isDark ? '#67E8F9' : '#0891B2', fontWeight: 600 }}>FinWolf</Box>,
                  I disrupted Switzerland's legacy insurance market with a fully digital, transparent platform.
                </Typography>
                <Typography sx={{ fontSize: '1.0625rem', color: 'text.secondary', lineHeight: 1.8 }}>
                  I partner with visionary founders to define product strategy, build and launch
                  platforms, and scale into new markets — bringing both the technical depth and
                  business instinct needed to execute.
                </Typography>
              </Box>

              {/* CTA */}
              <Box sx={{ mt: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward sx={{ fontSize: '1rem' }} />}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{ px: 4, py: 1.5, fontSize: '0.9375rem' }}
                >
                  Work with me
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
