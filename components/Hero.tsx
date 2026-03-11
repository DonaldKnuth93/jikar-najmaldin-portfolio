'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Stack, Chip, useTheme } from '@mui/material';
import { ArrowForward, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';

const floatingVariant = {
  animate: {
    y: [0, -16, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* Background gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: { xs: 400, md: 700 },
            height: { xs: 400, md: 700 },
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse-slow 8s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '-5%',
            width: { xs: 350, md: 600 },
            height: { xs: 350, md: 600 },
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse-slow 10s ease-in-out infinite reverse',
          }}
        />
        {/* Grid overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: isDark
              ? `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </Box>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: 900,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="✦ Entrepreneur & Founder"
              variant="outlined"
              sx={{
                mb: 4,
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                borderColor: 'primary.main',
                color: 'primary.main',
                background: isDark ? 'rgba(129,140,248,0.08)' : 'rgba(79,70,229,0.06)',
                borderRadius: '100px',
                height: 36,
                px: 1,
              }}
            />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                color: 'text.primary',
              }}
            >
              Building the
              <br />
              <span className="gradient-text">next generation</span>
              <br />
              of great products.
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 560,
                mb: 5,
                mt: 2,
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
              }}
            >
              I'm Jikar Najmaldin — a serial entrepreneur focused on building scalable platforms
              that connect people, capital, and opportunity. Founder of{' '}
              <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                Connectly24
              </Box>{' '}
              and{' '}
              <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                FinWolf
              </Box>
              .
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => {
                  const el = document.querySelector('#ventures');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                See my ventures
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    background: 'transparent',
                  },
                }}
              >
                Let's connect
              </Button>
            </Stack>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                mt: 10,
                display: 'flex',
                gap: { xs: 3, md: 6 },
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {[
                { value: '2+', label: 'Ventures built' },
                { value: '10K+', label: 'Users reached' },
                { value: '2', label: 'Countries' },
                { value: '∞', label: 'Ambition' },
              ].map((stat) => (
                <Box key={stat.label} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mt: 0.5, fontWeight: 500 }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          cursor: 'pointer',
        }}
        onClick={() => {
          const el = document.querySelector('#about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            color: 'text.secondary',
            opacity: 0.5,
            '&:hover': { opacity: 1 },
            transition: 'opacity 0.2s',
          }}
        >
          <Typography variant="caption" sx={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </Typography>
          <KeyboardArrowDown fontSize="small" />
        </Box>
      </motion.div>
    </Box>
  );
}
