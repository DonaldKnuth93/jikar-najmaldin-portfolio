'use client';

import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import {
  RocketLaunch,
  TrendingUp,
  AccountBalance,
  Code,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const CAPABILITIES = [
  {
    icon: RocketLaunch,
    title: 'Entrepreneurship',
    color: '#818CF8',
    skills: [
      'Product Strategy',
      'Business Development',
      'Go-to-Market',
      'Fundraising',
      'Startup Scaling',
    ],
  },
  {
    icon: Code,
    title: 'Technology',
    color: '#22D3EE',
    skills: [
      'Platform Architecture',
      'Tech Leadership',
      'AI & Automation',
      'Web Platforms',
      'Product Engineering',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    color: '#F59E0B',
    skills: [
      'Growth Hacking',
      'Digital Marketing',
      'Brand Building',
      'Community Building',
      'User Acquisition',
    ],
  },
  {
    icon: AccountBalance,
    title: 'Finance & Ops',
    color: '#34D399',
    skills: [
      'Financial Modeling',
      'Operations',
      'Investor Relations',
      'Team Building',
      'InsurTech',
    ],
  },
];

const DOMAINS = [
  'B2B Platforms',
  'Marketplace Design',
  'InsurTech',
  'Business Matchmaking',
  'Investment Platforms',
  'Product-Led Growth',
  'Swiss Market',
  'Cross-Border Business',
  'Digital Transformation',
  'Startup Scaling',
  'SaaS',
  'Fintech',
];

export default function Skills() {
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
      id="skills"
      sx={{ py: { xs: 12, md: 18 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-8%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(79,70,229,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
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
                Capabilities
              </Typography>
              <Box sx={{ height: '1px', bgcolor: 'divider', width: 60 }} />
            </Box>
            <Typography variant="h2" sx={{ color: 'text.primary', maxWidth: 580 }}>
              What I bring to{' '}
              <Box component="span" sx={gradientStyle}>
                every venture.
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Capability cards */}
        <Grid container spacing={2.5} sx={{ mb: 10 }}>
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={cap.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      p: 3.5,
                      borderRadius: '18px',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
                      background: isDark ? 'rgba(11,11,20,0.8)' : '#FFFFFF',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        borderColor: cap.color + '50',
                        transform: 'translateY(-4px)',
                        boxShadow: isDark
                          ? `0 20px 50px ${cap.color}14`
                          : `0 16px 40px ${cap.color}0e`,
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        background: `${cap.color}18`,
                        border: `1px solid ${cap.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: cap.color,
                      }}
                    >
                      <Icon sx={{ fontSize: '1.25rem' }} />
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.9375rem',
                        mb: 2.5,
                        color: 'text.primary',
                      }}
                    >
                      {cap.title}
                    </Typography>

                    {/* Skill tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {cap.skills.map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '8px',
                            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              color: 'text.secondary',
                              lineHeight: 1,
                            }}
                          >
                            {skill}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Domain expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              pt: 7,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'text.secondary',
                opacity: 0.6,
                mb: 4,
              }}
            >
              Domain expertise
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {DOMAINS.map((domain, i) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.035 }}
                >
                  <Box
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: '100px',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)',
                      background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                      '&:hover': {
                        borderColor: isDark ? 'rgba(129,140,248,0.4)' : 'rgba(79,70,229,0.3)',
                        background: isDark ? 'rgba(129,140,248,0.06)' : 'rgba(79,70,229,0.04)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: 'text.secondary',
                      }}
                    >
                      {domain}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
