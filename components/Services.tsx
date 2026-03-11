'use client';

import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import {
  LightbulbOutlined,
  RocketLaunchOutlined,
  TrendingUpOutlined,
  MonetizationOnOutlined,
  HandshakeOutlined,
  PublicOutlined,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: LightbulbOutlined,
    title: 'Product Strategy',
    desc: 'From idea to roadmap — defining the right product for the right market. I work with founders to clarify vision, validate assumptions, and create a path to product-market fit.',
    tags: ['Vision Definition', 'Market Validation', 'Roadmapping'],
    accent: '#818CF8',
  },
  {
    icon: RocketLaunchOutlined,
    title: 'Platform Development',
    desc: 'Building scalable B2B and B2C digital platforms from MVP through to full-scale launch. I bridge the gap between business requirements and technical execution.',
    tags: ['MVP Launch', 'Platform Architecture', 'Tech Leadership'],
    accent: '#A78BFA',
  },
  {
    icon: TrendingUpOutlined,
    title: 'Go-to-Market',
    desc: 'Launch strategies that generate real traction. I help teams enter new markets with confidence — from positioning and pricing to acquisition channels and growth loops.',
    tags: ['Market Entry', 'Growth Strategy', 'User Acquisition'],
    accent: '#22D3EE',
  },
  {
    icon: MonetizationOnOutlined,
    title: 'Fundraising & Investment',
    desc: 'Connecting ventures with the right capital at the right stage. From pitch deck narrative to investor introductions, I help founders tell compelling stories to investors.',
    tags: ['Investor Relations', 'Pitch Strategy', 'Capital Raising'],
    accent: '#34D399',
  },
  {
    icon: HandshakeOutlined,
    title: 'Business Development',
    desc: 'Strategic partnerships and deal-making across industries. I identify and close high-value partnerships that accelerate growth, expand reach, and create competitive moats.',
    tags: ['Partnerships', 'B2B Sales', 'Deal Structuring'],
    accent: '#F59E0B',
  },
  {
    icon: PublicOutlined,
    title: 'Market Expansion',
    desc: 'Taking products cross-border into new markets. From regulatory navigation to local partnerships, I\'ve built playbooks for entering European and global markets.',
    tags: ['Europe Expansion', 'Localisation', 'Market Research'],
    accent: '#F472B6',
  },
];

export default function Services() {
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
      id="services"
      sx={{
        py: { xs: 12, md: 18 },
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(180deg, transparent 0%, rgba(13,13,26,0.6) 50%, transparent 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(238,238,248,0.5) 50%, transparent 100%)',
      }}
    >
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
              What I offer
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3 }}>
              <Typography variant="h2" sx={{ color: 'text.primary', maxWidth: 520 }}>
                Services &{' '}
                <Box component="span" sx={gradSx}>
                  expertise.
                </Box>
              </Typography>
              <Typography sx={{ fontSize: '1rem', color: 'text.secondary', maxWidth: 380, lineHeight: 1.7 }}>
                From early-stage strategy to scaled operations — I bring hands-on experience
                across the full product lifecycle.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Services grid */}
        <Grid container spacing={2.5}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={svc.title}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      p: { xs: 3, md: 3.5 },
                      borderRadius: '18px',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
                      background: isDark ? 'rgba(13,13,26,0.7)' : '#FFFFFF',
                      backdropFilter: 'blur(12px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2.5,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        borderColor: svc.accent + '55',
                        transform: 'translateY(-4px)',
                        boxShadow: isDark
                          ? `0 24px 60px ${svc.accent}14`
                          : `0 20px 50px ${svc.accent}12`,
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box sx={{
                      width: 46, height: 46, borderRadius: '13px',
                      background: `${svc.accent}1a`,
                      border: `1px solid ${svc.accent}35`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: svc.accent,
                      flexShrink: 0,
                    }}>
                      <Icon sx={{ fontSize: '1.3rem' }} />
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', mb: 1.25 }}>
                        {svc.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.7 }}>
                        {svc.desc}
                      </Typography>
                    </Box>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 1.5, borderTop: '1px solid', borderColor: 'divider' }}>
                      {svc.tags.map(tag => (
                        <Box key={tag} sx={{
                          px: 1.5, py: 0.4, borderRadius: '7px',
                          background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                          border: '1px solid', borderColor: 'divider',
                        }}>
                          <Typography sx={{ fontSize: '0.72rem', fontWeight: 500, color: 'text.secondary' }}>
                            {tag}
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
      </Container>
    </Box>
  );
}
