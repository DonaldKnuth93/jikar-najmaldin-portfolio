'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';
import { ArrowForward, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';

const VENTURES = [
  { name: 'Connectly24', desc: 'B2B Matchmaking Platform', accent: '#818CF8', url: 'https://connectly24.com' },
  { name: 'FinWolf', desc: 'Swiss InsurTech', accent: '#22D3EE', url: 'https://finwolf.ch' },
];

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const g = isDark
    ? 'linear-gradient(135deg, #818CF8 0%, #A78BFA 50%, #22D3EE 100%)'
    : 'linear-gradient(135deg, #6366F1 0%, #7C3AED 50%, #0891B2 100%)';

  const gradSx = {
    background: g,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Background */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Orb 1 */}
        <Box sx={{
          position: 'absolute', top: '-10%', left: '-8%',
          width: { xs: 400, md: 800 }, height: { xs: 400, md: 800 }, borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }} />
        {/* Orb 2 */}
        <Box sx={{
          position: 'absolute', bottom: '-5%', right: '-5%',
          width: { xs: 350, md: 700 }, height: { xs: 350, md: 700 }, borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }} />
        {/* Dot grid */}
        <Box sx={{
          position: 'absolute', inset: 0,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0,0,0,0.055) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%)',
        }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Available badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            px: 1.75, py: 0.65, mb: 4.5, borderRadius: '100px',
            border: '1px solid',
            borderColor: isDark ? 'rgba(129,140,248,0.3)' : 'rgba(79,70,229,0.25)',
            background: isDark ? 'rgba(129,140,248,0.08)' : 'rgba(79,70,229,0.06)',
          }}>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E90' }} />
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: isDark ? '#A5B4FC' : '#4F46E5', letterSpacing: '0.02em' }}>
              Available for new ventures & partnerships
            </Typography>
          </Box>
        </motion.div>

        {/* Main heading — landing page style */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          <Typography variant="h1" sx={{ mb: 0, color: 'text.primary', maxWidth: 860 }}>
            Building platforms
            <br />
            <Box component="span" sx={gradSx}>that reshape</Box>
            <br />
            industries.
          </Typography>
        </motion.div>

        {/* Sub headline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}>
          <Typography sx={{
            mt: 4, mb: 5.5,
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            lineHeight: 1.7, color: 'text.secondary', maxWidth: 580,
          }}>
            I'm Jikar Najmaldin — serial entrepreneur and product strategist. I build scalable
            digital platforms, launch them globally, and help founders turn ideas into
            market-ready products.
          </Typography>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward sx={{ fontSize: '1rem' }} />}
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ px: 4, py: 1.6, fontSize: '0.9375rem' }}
            >
              View my work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                px: 4, py: 1.6, fontSize: '0.9375rem',
                borderColor: isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.16)',
                color: 'text.primary',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main', background: 'transparent' },
              }}
            >
              Work with me
            </Button>
          </Stack>
        </motion.div>

        {/* Venture logos row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}>
          <Box sx={{
            mt: 10, pt: 5,
            borderTop: '1px solid', borderColor: 'divider',
            display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3,
          }}>
            <Typography sx={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'text.secondary', opacity: 0.5, flexShrink: 0,
            }}>
              Ventures built
            </Typography>
            {VENTURES.map((v) => (
              <Box
                key={v.name}
                component="a"
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex', alignItems: 'center', gap: 1.25,
                  textDecoration: 'none', opacity: 0.65,
                  transition: 'opacity 0.2s',
                  '&:hover': { opacity: 1 },
                }}
              >
                <Box sx={{
                  width: 28, height: 28, borderRadius: '8px',
                  background: `linear-gradient(135deg, ${v.accent}, ${v.accent}aa)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.7rem', color: '#fff' }}>
                    {v.name[0]}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: 'text.secondary' }}>
                  {v.name}
                </Typography>
              </Box>
            ))}
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.35,
            }}>
              {[0, 1, 2].map(i => (
                <Box key={i} sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'text.secondary' }} />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', zIndex: 1 }}
        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5,
          color: 'text.secondary', opacity: 0.35, '&:hover': { opacity: 0.7 }, transition: 'opacity 0.2s',
        }}>
          <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            Scroll
          </Typography>
          <KeyboardArrowDown sx={{ fontSize: '1rem' }} />
        </Box>
      </motion.div>
    </Box>
  );
}
