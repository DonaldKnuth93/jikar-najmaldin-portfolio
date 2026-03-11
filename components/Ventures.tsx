'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ventures = [
  {
    id: 'connectly24',
    name: 'Connectly24',
    category: 'B2B Platform · Marketplace',
    tagline: 'Your One and Only Business Matchmaking Partner',
    description:
      'A global digital ecosystem connecting entrepreneurs, investors, and enterprises. From investment discovery and project bidding to fundraising and professional networking — Connectly24 is the central hub for strategic business connections across continents.',
    capabilities: [
      'Investment discovery & deal flow',
      'Project bidding marketplace',
      'Cross-border fundraising',
      'Strategic matchmaking',
    ],
    url: 'https://connectly24.com',
    accent: '#818CF8',
    accentDark: '#6366F1',
    gradient: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 60%, #7C3AED 100%)',
    year: '2021',
  },
  {
    id: 'finwolf',
    name: 'FinWolf',
    category: 'InsurTech · Switzerland',
    tagline: 'Swiss Insurance Platform, Reinvented',
    description:
      'Redefining how Switzerland approaches insurance. A modern, transparent, tech-first insurance platform built for the digital generation — making financial protection simple, accessible, and intelligent.',
    capabilities: [
      'Digital-first insurance',
      'Transparent pricing',
      'AI-powered recommendations',
      'Swiss market expertise',
    ],
    url: 'https://finwolf.ch',
    accent: '#22D3EE',
    accentDark: '#0891B2',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 60%, #0891B2 100%)',
    year: '2022',
  },
];

function VentureCard({ venture, index }: { venture: typeof ventures[0]; index: number }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%' }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
          overflow: 'hidden',
          background: isDark ? '#0B0B14' : '#FFFFFF',
          transition: 'all 0.35s ease',
          '&:hover': {
            borderColor: venture.accent + '50',
            transform: 'translateY(-6px)',
            boxShadow: isDark
              ? `0 32px 80px ${venture.accent}18`
              : `0 24px 60px ${venture.accent}14`,
          },
        }}
      >
        {/* Visual header */}
        <Box
          sx={{
            height: 200,
            background: venture.gradient,
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {/* Inner glow */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 25% 35%, rgba(255,255,255,0.18) 0%, transparent 50%),
                radial-gradient(circle at 75% 65%, rgba(255,255,255,0.08) 0%, transparent 45%)
              `,
            }}
          />

          {/* Mock UI elements */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            {/* Fake app window */}
            <Box
              sx={{
                background: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                p: 1.5,
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
            >
              {/* Traffic light dots */}
              {['#FF5F57', '#FFBD2E', '#28C840'].map((c, i) => (
                <Box
                  key={i}
                  sx={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.9 }}
                />
              ))}
              {/* URL bar */}
              <Box
                sx={{
                  flex: 1,
                  height: 18,
                  borderRadius: '5px',
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  px: 1,
                  gap: 0.5,
                }}
              >
                <Box
                  sx={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}
                />
                <Box
                  sx={{ height: 3, flex: 1, borderRadius: 1, background: 'rgba(255,255,255,0.25)' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Year badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              px: 1.5,
              py: 0.5,
              borderRadius: '100px',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#fff' }}>
              Founded {venture.year}
            </Typography>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ p: { xs: 3, md: 4 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header row */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5 }}>
            <Box>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: venture.accent, mb: 0.75, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {venture.category}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                {venture.name}
              </Typography>
            </Box>
            {/* Live indicator */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.6,
                px: 1.25,
                py: 0.5,
                borderRadius: '100px',
                background: isDark ? 'rgba(34,197,94,0.1)' : 'rgba(22,163,74,0.07)',
                border: '1px solid rgba(34,197,94,0.25)',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22C55E',
                  boxShadow: '0 0 6px #22C55E',
                }}
              />
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#22C55E' }}>
                Live
              </Typography>
            </Box>
          </Box>

          {/* Tagline */}
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'text.primary',
              mb: 1.75,
              lineHeight: 1.45,
            }}
          >
            {venture.tagline}
          </Typography>

          {/* Description */}
          <Typography
            sx={{ fontSize: '0.9375rem', color: 'text.secondary', lineHeight: 1.75, mb: 3 }}
          >
            {venture.description}
          </Typography>

          {/* Capabilities */}
          <Box
            sx={{
              mt: 'auto',
              pt: 2.5,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {venture.capabilities.map((cap) => (
                <Box
                  key={cap}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: venture.accent,
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary', fontWeight: 500 }}>
                    {cap}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              endIcon={<ArrowOutward sx={{ fontSize: '0.9rem' }} />}
              sx={{
                color: venture.accent,
                fontWeight: 600,
                fontSize: '0.875rem',
                p: 0,
                minWidth: 'auto',
                '&:hover': {
                  background: 'transparent',
                  opacity: 0.8,
                },
              }}
            >
              Visit {venture.name}
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Ventures() {
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
      id="ventures"
      sx={{
        py: { xs: 12, md: 18 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'linear-gradient(180deg, transparent 0%, rgba(11,11,20,0.6) 50%, transparent 100%)'
            : 'linear-gradient(180deg, transparent 0%, rgba(238,240,255,0.4) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 7, md: 11 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isDark ? 'rgba(129,140,248,0.7)' : 'rgba(79,70,229,0.7)',
                }}
              >
                Ventures
              </Typography>
              <Box sx={{ height: '1px', bgcolor: 'divider', width: 60 }} />
            </Box>
            <Typography variant="h2" sx={{ color: 'text.primary', maxWidth: 640 }}>
              Products I've{' '}
              <Box component="span" sx={gradientStyle}>
                built & launched.
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Cards */}
        <Grid container spacing={3.5}>
          {ventures.map((v, i) => (
            <Grid size={{ xs: 12, lg: 6 }} key={v.id}>
              <VentureCard venture={v} index={i} />
            </Grid>
          ))}
        </Grid>

        {/* More coming teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 4,
              px: { xs: 3, md: 5 },
              py: 3.5,
              borderRadius: '16px',
              border: '1px dashed',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'wrap',
              transition: 'all 0.25s ease',
              '&:hover': {
                borderColor: 'primary.main',
                background: isDark ? 'rgba(129,140,248,0.03)' : 'rgba(79,70,229,0.02)',
              },
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: '0.9375rem' }}>
                More in stealth mode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                New ventures under development. Watch this space.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 0.5,
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
