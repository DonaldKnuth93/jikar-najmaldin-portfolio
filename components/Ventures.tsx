'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { ArrowOutward, Check } from '@mui/icons-material';
import { motion } from 'framer-motion';

const VENTURES = [
  {
    id: 'connectly24',
    name: 'Connectly24',
    year: '2021',
    category: 'B2B Platform · Marketplace',
    tagline: 'Your One and Only Business Matchmaking Partner',
    problem: 'Businesses globally lacked a single platform to discover partners, investors, and deals. Existing solutions were fragmented, expensive, and not built for cross-border growth.',
    solution: 'A comprehensive digital ecosystem connecting entrepreneurs, investors, and enterprises — enabling investment discovery, project bidding, fundraising, and strategic networking in one place.',
    metrics: [
      { value: '10K+', label: 'Platform users' },
      { value: '30+', label: 'Countries' },
      { value: '500+', label: 'Deals facilitated' },
    ],
    deliverables: [
      'Investment discovery & deal flow engine',
      'Project bidding marketplace',
      'Cross-border fundraising tools',
      'Verified business matching algorithm',
    ],
    url: 'https://connectly24.com',
    accent: '#818CF8',
    gradient: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)',
    gradientBgDark: 'linear-gradient(135deg, rgba(129,140,248,0.12) 0%, rgba(167,139,250,0.06) 100%)',
    gradientBgLight: 'linear-gradient(135deg, rgba(129,140,248,0.1) 0%, rgba(167,139,250,0.05) 100%)',
  },
  {
    id: 'finwolf',
    name: 'FinWolf',
    year: '2022',
    category: 'InsurTech · Switzerland',
    tagline: 'Swiss Insurance, Reinvented for the Digital Age',
    problem: 'Switzerland\'s insurance market was dominated by opaque, legacy players. Customers faced confusing pricing, slow processes, and zero digital experience when buying or managing insurance.',
    solution: 'A modern, transparent, tech-first insurance platform built for the digital generation — making financial protection in Switzerland simple, accessible, and intelligently personalised.',
    metrics: [
      { value: 'CH', label: 'Swiss market focus' },
      { value: '100%', label: 'Digital-first' },
      { value: '3min', label: 'To get covered' },
    ],
    deliverables: [
      'Digital insurance purchase flow',
      'Transparent, AI-powered pricing',
      'Policy management dashboard',
      'Claims processing automation',
    ],
    url: 'https://finwolf.ch',
    accent: '#22D3EE',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 100%)',
    gradientBgDark: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(14,165,233,0.05) 100%)',
    gradientBgLight: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(14,165,233,0.04) 100%)',
  },
];

function CaseStudyCard({ v, index }: { v: typeof VENTURES[0]; index: number }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box
        sx={{
          borderRadius: '24px',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
          overflow: 'hidden',
          background: isDark ? '#0D0D1A' : '#FFFFFF',
          transition: 'border-color 0.3s',
          '&:hover': { borderColor: v.accent + '45' },
        }}
      >
        {/* Top gradient band */}
        <Box sx={{ height: 4, background: v.gradient }} />

        <Box sx={{ p: { xs: 3.5, md: 5 } }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="flex-start">
            {/* Left: Meta + heading */}
            <Grid size={{ xs: 12, md: 5 }}>
              {/* Category + year */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: v.accent, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {v.category}
                </Typography>
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'divider' }} />
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 500, color: 'text.secondary' }}>
                  {v.year}
                </Typography>
              </Box>

              {/* Name */}
              <Typography variant="h2" sx={{ color: 'text.primary', mb: 1.5, fontWeight: 800 }}>
                {v.name}
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', fontWeight: 600, color: 'text.secondary', mb: 3, lineHeight: 1.5 }}>
                {v.tagline}
              </Typography>

              {/* Metrics */}
              <Box sx={{
                display: 'flex', gap: 3, mb: 3.5,
                p: 2.5, borderRadius: '14px',
                background: isDark ? v.gradientBgDark : v.gradientBgLight,
                border: '1px solid', borderColor: v.accent + '25',
              }}>
                {v.metrics.map(m => (
                  <Box key={m.label}>
                    <Typography sx={{
                      fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.04em',
                      background: v.gradient,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      lineHeight: 1,
                    }}>
                      {m.value}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mt: 0.4, fontWeight: 500 }}>
                      {m.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                component="a"
                variant="outlined"
                endIcon={<ArrowOutward sx={{ fontSize: '0.85rem' }} />}
                sx={{
                  borderColor: v.accent + '55',
                  color: v.accent,
                  fontSize: '0.875rem',
                  '&:hover': { borderColor: v.accent, background: v.accent + '0d' },
                }}
              >
                Visit {v.name}
              </Button>
            </Grid>

            {/* Right: Case study details */}
            <Grid size={{ xs: 12, md: 7 }}>
              {/* The challenge */}
              <Box sx={{ mb: 3.5 }}>
                <Typography sx={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'text.secondary', opacity: 0.6, mb: 1.25,
                }}>
                  The Challenge
                </Typography>
                <Typography sx={{ fontSize: '0.9625rem', color: 'text.secondary', lineHeight: 1.75 }}>
                  {v.problem}
                </Typography>
              </Box>

              {/* The solution */}
              <Box sx={{ mb: 3.5 }}>
                <Typography sx={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'text.secondary', opacity: 0.6, mb: 1.25,
                }}>
                  The Solution
                </Typography>
                <Typography sx={{ fontSize: '0.9625rem', color: 'text.secondary', lineHeight: 1.75 }}>
                  {v.solution}
                </Typography>
              </Box>

              {/* Deliverables */}
              <Box>
                <Typography sx={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'text.secondary', opacity: 0.6, mb: 1.75,
                }}>
                  Key Features
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {v.deliverables.map(d => (
                    <Box key={d} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: v.accent + '20',
                        border: `1px solid ${v.accent}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        color: v.accent,
                      }}>
                        <Check sx={{ fontSize: '0.75rem' }} />
                      </Box>
                      <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', fontWeight: 500 }}>
                        {d}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Ventures() {
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
    <Box component="section" id="work" sx={{ py: { xs: 12, md: 18 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography sx={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', mb: 3, display: 'block',
              color: isDark ? 'rgba(129,140,248,0.8)' : 'rgba(79,70,229,0.8)',
            }}>
              Selected work
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3 }}>
              <Typography variant="h2" sx={{ color: 'text.primary' }}>
                Projects I've{' '}
                <Box component="span" sx={gradSx}>built & shipped.</Box>
              </Typography>
              <Typography sx={{ fontSize: '1rem', color: 'text.secondary', maxWidth: 360, lineHeight: 1.7 }}>
                From idea to live product — each venture solves a real problem at scale.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Case studies */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {VENTURES.map((v, i) => (
            <CaseStudyCard key={v.id} v={v} index={i} />
          ))}
        </Box>

        {/* Stealth teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box sx={{
            mt: 4, p: { xs: 3, md: 4 },
            borderRadius: '18px',
            border: '1px dashed',
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 3,
            transition: 'all 0.25s',
            '&:hover': {
              borderColor: isDark ? 'rgba(129,140,248,0.4)' : 'rgba(79,70,229,0.35)',
              background: isDark ? 'rgba(129,140,248,0.03)' : 'rgba(79,70,229,0.02)',
            },
          }}>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.9375rem', mb: 0.5 }}>
                New ventures in development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Currently building the next platform. Stay tuned.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.75 }}>
              {[0,1,2].map(i => (
                <Box key={i} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: 'divider', border: '1px solid', borderColor: 'divider' }} />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
