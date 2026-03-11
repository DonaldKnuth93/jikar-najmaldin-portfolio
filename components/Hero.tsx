'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { ArrowForward, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';

const GRADIENT_STYLE = {
  background: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 50%, #22D3EE 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const GRADIENT_STYLE_LIGHT = {
  background: 'linear-gradient(135deg, #6366F1 0%, #7C3AED 50%, #0891B2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

function ProductCard({
  name,
  tagline,
  accent,
  delay,
  rotate,
  url,
}: {
  name: string;
  tagline: string;
  accent: string;
  delay: number;
  rotate: number;
  url: string;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: 0, transition: { duration: 0.3 } }}
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(url, '_blank')}
    >
      <Box
        sx={{
          width: { xs: 180, sm: 220 },
          borderRadius: '18px',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          background: isDark ? '#0B0B14' : '#FFFFFF',
          boxShadow: isDark
            ? `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${accent}20`
            : `0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px ${accent}20`,
        }}
      >
        {/* App header bar */}
        <Box
          sx={{
            height: 90,
            background: `linear-gradient(135deg, ${accent}dd, ${accent}88)`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle noise/pattern */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
            }}
          />
          {/* App icon */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 12,
              left: 14,
              width: 32,
              height: 32,
              borderRadius: '9px',
              background: 'rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>
              {name[0]}
            </Typography>
          </Box>
          {/* Live badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              px: 1,
              py: 0.35,
              borderRadius: '100px',
              background: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(8px)',
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
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: '#fff' }}>
              Live
            </Typography>
          </Box>
        </Box>

        {/* Card content */}
        <Box sx={{ p: 1.75 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: 'text.primary',
              mb: 0.4,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: '0.7rem', color: 'text.secondary', lineHeight: 1.4 }}
          >
            {tagline}
          </Typography>
          {/* Mock UI lines */}
          <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 0.6 }}>
            {[70, 50, 85].map((w, i) => (
              <Box
                key={i}
                sx={{
                  height: 4,
                  width: `${w}%`,
                  borderRadius: 2,
                  background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const gradientStyle = isDark ? GRADIENT_STYLE : GRADIENT_STYLE_LIGHT;

  const stats = [
    { value: '2+', label: 'Ventures' },
    { value: '10K+', label: 'Users' },
    { value: '2', label: 'Countries' },
  ];

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Background orbs */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '-5%',
            left: '-10%',
            width: { xs: 400, md: 750 },
            height: { xs: 400, md: 750 },
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)'
              : 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '0%',
            right: '-5%',
            width: { xs: 350, md: 650 },
            height: { xs: 350, md: 650 },
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%)'
              : 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Dot grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: isDark
              ? 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)'
              : 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr auto' },
            gap: { xs: 6, lg: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left: Content */}
          <Box
            sx={{
              maxWidth: 720,
            }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.5,
                  py: 0.6,
                  mb: 4,
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(129,140,248,0.25)' : 'rgba(79,70,229,0.2)',
                  background: isDark ? 'rgba(129,140,248,0.07)' : 'rgba(79,70,229,0.05)',
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 8px #22C55E80',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: isDark ? '#818CF8' : '#4F46E5',
                    letterSpacing: '0.03em',
                  }}
                >
                  Entrepreneur & Founder · Europe
                </Typography>
              </Box>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 1.5,
                  color: 'text.primary',
                  lineHeight: 0.95,
                }}
              >
                Jikar
                <br />
                <Box component="span" sx={gradientStyle}>
                  Najmaldin.
                </Box>
              </Typography>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.65,
                  color: 'text.secondary',
                  maxWidth: 540,
                  mt: 3,
                  mb: 4.5,
                }}
              >
                Serial entrepreneur turning bold ideas into global platforms.
                Building products that connect people, capital, and opportunity.
              </Typography>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward sx={{ fontSize: '1rem' }} />}
                  onClick={() => {
                    document.querySelector('#ventures')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{ px: 3.5, py: 1.5, fontSize: '0.9375rem' }}
                >
                  View ventures
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontSize: '0.9375rem',
                    borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.14)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      background: 'transparent',
                    },
                  }}
                >
                  Get in touch
                </Button>
              </Stack>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Box
                sx={{
                  mt: 7,
                  pt: 5,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  gap: { xs: 4, md: 7 },
                  flexWrap: 'wrap',
                }}
              >
                {stats.map((s) => (
                  <Box key={s.label}>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.75rem', md: '2.25rem' },
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        ...gradientStyle,
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        color: 'text.secondary',
                        mt: 0.5,
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Right: Product cards */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center',
              position: 'relative',
              pr: 4,
            }}
          >
            <ProductCard
              name="Connectly24"
              tagline="Business matchmaking platform"
              accent="#818CF8"
              delay={0.5}
              rotate={-3}
              url="https://connectly24.com"
            />
            <ProductCard
              name="FinWolf"
              tagline="Swiss insurance, reinvented"
              accent="#22D3EE"
              delay={0.65}
              rotate={3}
              url="https://finwolf.ch"
            />
          </Box>
        </Box>
      </Container>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            color: 'text.secondary',
            opacity: 0.4,
            '&:hover': { opacity: 0.8 },
            transition: 'opacity 0.2s',
          }}
        >
          <Typography
            sx={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            Scroll
          </Typography>
          <KeyboardArrowDown sx={{ fontSize: '1rem' }} />
        </Box>
      </motion.div>
    </Box>
  );
}
