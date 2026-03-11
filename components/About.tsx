'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  Divider,
} from '@mui/material';
import {
  RocketLaunch,
  Diversity3,
  TrendingUp,
  Public,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    icon: <RocketLaunch />,
    title: 'Builder Mindset',
    desc: 'I believe in shipping fast, learning faster. Every product starts with a problem worth solving.',
  },
  {
    icon: <Diversity3 />,
    title: 'People First',
    desc: 'Great products are built by great teams and for great people. Human connection is everything.',
  },
  {
    icon: <TrendingUp />,
    title: 'Growth Obsessed',
    desc: 'Compounding — whether in business, knowledge, or relationships — is the most powerful force.',
  },
  {
    icon: <Public />,
    title: 'Global Vision',
    desc: 'Building products that transcend borders and create opportunities wherever people exist.',
  },
];

function ValueCard({ icon, title, desc, index }: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3.5,
          height: '100%',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          background: isDark ? 'rgba(13,13,22,0.6)' : 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          cursor: 'default',
          '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-4px)',
            boxShadow: isDark
              ? '0 20px 40px rgba(99,102,241,0.15)'
              : '0 20px 40px rgba(79,70,229,0.1)',
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(34,211,238,0.15))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
            color: 'primary.main',
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight={700} mb={1.5}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.75}>
          {desc}
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(8,145,178,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left: Text */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
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
                About me
              </Typography>

              <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
                Turning bold ideas into{' '}
                <Box component="span" className="gradient-text">
                  real companies
                </Box>
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                I'm Jikar Najmaldin — an entrepreneur who thrives at the intersection of technology,
                business, and innovation. I don't just build products; I build ecosystems that
                empower people to achieve more.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                With a track record of launching ventures that solve real-world problems, I've learned
                that the greatest businesses are born from genuine understanding of human needs — and
                relentless execution.
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Whether connecting businesses globally through{' '}
                <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                  Connectly24
                </Box>{' '}
                or disrupting the insurance industry in Switzerland with{' '}
                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  FinWolf
                </Box>
                , my mission is the same: build things that matter.
              </Typography>

              <Divider sx={{ my: 4, borderColor: 'divider' }} />

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {[
                  { label: 'Founded', value: '2020' },
                  { label: 'Based in', value: 'Europe' },
                  { label: 'Focus', value: 'B2B & Fintech' },
                ].map((item) => (
                  <Box key={item.label}>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', display: 'block', mb: 0.5, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, fontSize: '0.7rem' }}
                    >
                      {item.label}
                    </Typography>
                    <Typography fontWeight={700} color="text.primary">
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Values grid */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2.5}>
              {values.map((v, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={v.title}>
                  <ValueCard {...v} index={i} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
