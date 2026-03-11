'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  LinearProgress,
  linearProgressClasses,
  styled,
} from '@mui/material';
import { motion } from 'framer-motion';

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundImage: 'linear-gradient(135deg, #818CF8, #22D3EE)',
  },
}));

const skillCategories = [
  {
    title: 'Entrepreneurship',
    icon: '🚀',
    skills: [
      { name: 'Product Strategy', level: 95 },
      { name: 'Business Development', level: 92 },
      { name: 'Fundraising', level: 85 },
      { name: 'Go-to-Market', level: 90 },
    ],
  },
  {
    title: 'Technology',
    icon: '💻',
    skills: [
      { name: 'Product Architecture', level: 88 },
      { name: 'Tech Leadership', level: 85 },
      { name: 'Web Platforms', level: 80 },
      { name: 'AI & Automation', level: 78 },
    ],
  },
  {
    title: 'Growth & Marketing',
    icon: '📈',
    skills: [
      { name: 'Growth Hacking', level: 90 },
      { name: 'Digital Marketing', level: 87 },
      { name: 'Brand Building', level: 88 },
      { name: 'Community Building', level: 85 },
    ],
  },
  {
    title: 'Finance & Operations',
    icon: '💼',
    skills: [
      { name: 'Financial Modeling', level: 82 },
      { name: 'Operations', level: 88 },
      { name: 'Investor Relations', level: 80 },
      { name: 'Team Building', level: 92 },
    ],
  },
];

const expertise = [
  { label: 'B2B Platforms', color: '#818CF8' },
  { label: 'Marketplace Design', color: '#A78BFA' },
  { label: 'InsurTech', color: '#22D3EE' },
  { label: 'Business Matchmaking', color: '#0EA5E9' },
  { label: 'Investment Platforms', color: '#818CF8' },
  { label: 'Product-Led Growth', color: '#F59E0B' },
  { label: 'Swiss Market', color: '#34D399' },
  { label: 'Cross-Border Business', color: '#F472B6' },
  { label: 'Digital Transformation', color: '#818CF8' },
  { label: 'Startup Scaling', color: '#22D3EE' },
];

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      id="skills"
      sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
              Expertise
            </Typography>
            <Typography variant="h2" sx={{ mb: 2.5 }}>
              Skills &{' '}
              <Box component="span" className="gradient-text">
                capabilities
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              A decade of building, failing, learning, and shipping. These are the core competencies
              I bring to every venture.
            </Typography>
          </Box>
        </motion.div>

        {/* Skill categories */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {skillCategories.map((cat, catIdx) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={cat.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                style={{ height: '100%' }}
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
                    transition: 'border-color 0.3s',
                    '&:hover': { borderColor: 'primary.main' },
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1.5} mb={3}>
                    <Typography fontSize="1.5rem">{cat.icon}</Typography>
                    <Typography variant="h6" fontWeight={700}>
                      {cat.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {cat.skills.map((skill, skillIdx) => (
                      <Box key={skill.name}>
                        <Box display="flex" justifyContent="space-between" mb={0.75}>
                          <Typography variant="body2" fontWeight={500}>
                            {skill.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" fontWeight={600}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <motion.div
                          initial={{ scaleX: 0, originX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                          style={{ originX: 0 }}
                        >
                          <StyledProgress variant="determinate" value={skill.level} />
                        </motion.div>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Expertise tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              fontWeight: 700,
              letterSpacing: '0.1em',
              fontSize: '0.7rem',
              mb: 3,
              display: 'block',
            }}
          >
            Domain expertise
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {expertise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Box
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: '100px',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: item.color + '60',
                      background: item.color + '10',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.8125rem' }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
