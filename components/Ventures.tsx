'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { OpenInNew, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ventures = [
  {
    name: 'Connectly24',
    tagline: 'Your One and Only Business Matchmaking Partner',
    description:
      'A global digital ecosystem that connects entrepreneurs, investors, and enterprises. From investment discovery and project bidding to fundraising and professional networking — Connectly24 is the central hub for strategic business connections across continents.',
    tags: ['B2B Platform', 'Marketplace', 'Networking', 'Investment'],
    url: 'https://connectly24.com',
    accentColor: '#818CF8',
    accentGradient: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)',
    status: 'Live',
    highlights: [
      'Investment discovery & deal flow',
      'Project bidding marketplace',
      'Cross-border fundraising',
      'Strategic matchmaking',
    ],
    initial: 'C',
  },
  {
    name: 'FinWolf',
    tagline: 'Swiss Insurance Platform, Reinvented',
    description:
      'FinWolf is redefining how Switzerland approaches insurance. A modern, transparent, and tech-first insurance platform built for the digital generation — making financial protection simple, accessible, and intelligent.',
    tags: ['Fintech', 'InsurTech', 'Switzerland', 'B2C'],
    url: 'https://finwolf.ch',
    accentColor: '#22D3EE',
    accentGradient: 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 100%)',
    status: 'Live',
    highlights: [
      'Digital-first insurance',
      'Transparent pricing',
      'Swiss market expertise',
      'AI-powered recommendations',
    ],
    initial: 'F',
  },
];

export default function Ventures() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      id="ventures"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'linear-gradient(180deg, transparent 0%, rgba(13,13,22,0.5) 50%, transparent 100%)'
            : 'linear-gradient(180deg, transparent 0%, rgba(240,242,255,0.5) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 6, md: 10 }, maxWidth: 600 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.75rem',
                mb: 2,
                display: 'block',
              }}
            >
              My ventures
            </Typography>
            <Typography variant="h2" sx={{ mb: 2.5, color: 'text.primary' }}>
              Products I've{' '}
              <Box component="span" className="gradient-text">
                built & launched
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              Each venture starts with a clear problem and a conviction that better solutions are
              possible. Here's what I've built so far.
            </Typography>
          </Box>
        </motion.div>

        {/* Venture cards */}
        <Grid container spacing={4}>
          {ventures.map((venture, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={venture.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: isDark ? 'rgba(13,13,22,0.6)' : 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.4s ease',
                    cursor: 'default',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: venture.accentColor + '60',
                      boxShadow: isDark
                        ? `0 30px 60px ${venture.accentColor}20`
                        : `0 20px 50px ${venture.accentColor}15`,
                      '& .venture-cta': {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                  }}
                >
                  {/* Top accent bar */}
                  <Box sx={{ height: 3, background: venture.accentGradient }} />

                  <Box sx={{ p: { xs: 3, md: 4.5 } }}>
                    {/* Header */}
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={3}>
                      <Box display="flex" alignItems="center" gap={2}>
                        {/* Logo placeholder */}
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '16px',
                            background: venture.accentGradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: `0 8px 24px ${venture.accentColor}30`,
                          }}
                        >
                          <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>
                            {venture.initial}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h4" fontWeight={800} sx={{ lineHeight: 1.2, mb: 0.5 }}>
                            {venture.name}
                          </Typography>
                          <Chip
                            label={venture.status}
                            size="small"
                            sx={{
                              background: isDark ? 'rgba(34,197,94,0.12)' : 'rgba(22,163,74,0.08)',
                              color: '#22C55E',
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 22,
                              borderRadius: '6px',
                              border: '1px solid rgba(34,197,94,0.25)',
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>

                    {/* Tagline */}
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ mb: 2, color: 'text.primary', lineHeight: 1.5 }}
                    >
                      {venture.tagline}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3.5, lineHeight: 1.8 }}
                    >
                      {venture.description}
                    </Typography>

                    {/* Highlights */}
                    <Box
                      sx={{
                        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                        borderRadius: 2.5,
                        p: 2.5,
                        mb: 3.5,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Grid container spacing={1.5}>
                        {venture.highlights.map((h) => (
                          <Grid size={{ xs: 6 }} key={h}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <Box
                                sx={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: '50%',
                                  background: venture.accentGradient,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="caption"
                                sx={{ fontWeight: 500, color: 'text.secondary', lineHeight: 1.4 }}
                              >
                                {h}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Tags + CTA */}
                    <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                        {venture.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.6875rem',
                              fontWeight: 500,
                              borderColor: 'divider',
                              color: 'text.secondary',
                              height: 26,
                            }}
                          />
                        ))}
                      </Stack>
                      <Button
                        variant="text"
                        size="small"
                        endIcon={<OpenInNew fontSize="small" />}
                        href={venture.url}
                        target="_blank"
                        className="venture-cta"
                        sx={{
                          color: venture.accentColor,
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          p: 0,
                          minWidth: 'auto',
                          '&:hover': { background: 'transparent' },
                        }}
                      >
                        Visit site
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* More coming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, md: 4 },
              border: '1px dashed',
              borderColor: 'divider',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
              background: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                background: isDark ? 'rgba(129,140,248,0.03)' : 'rgba(79,70,229,0.02)',
              },
            }}
          >
            <Box>
              <Typography fontWeight={700} mb={0.5}>
                More ventures in stealth mode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Building the next big thing. Stay tuned.
              </Typography>
            </Box>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                border: '2px dashed',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
              }}
            >
              <Typography fontSize="1.25rem">...</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
