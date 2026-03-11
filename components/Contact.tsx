'use client';

import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField,
  Button, useTheme, Snackbar, Alert, IconButton, Tooltip,
} from '@mui/material';
import { Send, ContentCopy, CheckCircle, LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const EMAIL = 'hello@jikarnajm.com';

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const gradSx = {
    background: isDark
      ? 'linear-gradient(135deg, #818CF8 0%, #22D3EE 100%)'
      : 'linear-gradient(135deg, #6366F1 0%, #0891B2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `mailto:${EMAIL}?subject=Hello from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(url, '_blank');
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const SOCIALS = [
    { label: 'LinkedIn', handle: '/in/jikarnajmaldin', href: 'https://linkedin.com/in/jikarnajmaldin', Icon: LinkedIn, color: '#0A66C2' },
    { label: 'Twitter / X', handle: '@jikarnajm', href: 'https://twitter.com/jikarnajm', Icon: Twitter, color: '#1DA1F2' },
    { label: 'GitHub', handle: 'jikarnajm', href: 'https://github.com/jikarnajm', Icon: GitHub, color: isDark ? '#E2E8F0' : '#24292F' },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 12, md: 18 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <Box sx={{
        position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)',
        width: 1000, height: 500, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)'
          : 'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              Get in touch
            </Typography>
            <Typography variant="h2" sx={{ color: 'text.primary', maxWidth: 580 }}>
              Let's build{' '}
              <Box component="span" sx={gradSx}>something great.</Box>
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left: Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography sx={{ fontSize: '1rem', color: 'text.secondary', lineHeight: 1.75, mb: 5 }}>
                Have a project in mind, want to partner on a new venture, or just want to say hello?
                I'm always open to interesting conversations.
              </Typography>

              {/* Email */}
              <Box sx={{
                p: 2.5, borderRadius: '14px',
                border: '1px solid', borderColor: 'divider',
                background: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
                boxShadow: isDark ? 'none' : '0 1px 4px rgba(0,0,0,0.06)',
                mb: 2.5,
              }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', opacity: 0.6, mb: 1.5 }}>
                  Email
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: isDark ? '#A5B4FC' : '#4F46E5' }}>
                    {EMAIL}
                  </Typography>
                  <Tooltip title={copied ? 'Copied!' : 'Copy'}>
                    <IconButton size="small" onClick={handleCopy} sx={{ color: copied ? '#22C55E' : 'text.secondary' }}>
                      {copied ? <CheckCircle sx={{ fontSize: '1rem' }} /> : <ContentCopy sx={{ fontSize: '1rem' }} />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* Socials */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {SOCIALS.map(s => (
                  <Box key={s.label} component="a" href={s.href} target="_blank" rel="noopener noreferrer" sx={{
                    display: 'flex', alignItems: 'center', gap: 2,
                    p: 1.75, borderRadius: '12px',
                    border: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.09)',
                    background: isDark ? 'transparent' : '#FFFFFF',
                    boxShadow: isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.05)',
                    textDecoration: 'none', color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: s.color + '60',
                      color: s.color,
                      background: s.color + '0c',
                      transform: 'translateX(4px)',
                    },
                  }}>
                    <s.Icon sx={{ fontSize: '1.1rem' }} />
                    <Box>
                      <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>{s.label}</Typography>
                      <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>{s.handle}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                  background: isDark ? '#0D0D1A' : '#FFFFFF',
                  boxShadow: isDark ? 'none' : '0 4px 24px rgba(0,0,0,0.07)',
                }}
              >
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Your email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth label="Message" multiline rows={6}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required placeholder="Tell me about your project, idea, or just say hello..."
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit" variant="contained" size="large"
                      endIcon={<Send sx={{ fontSize: '0.9rem' }} />}
                      fullWidth sx={{ py: 1.75, fontSize: '0.9375rem' }}
                    >
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={sent} autoHideDuration={4000} onClose={() => setSent(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success" onClose={() => setSent(false)} sx={{ borderRadius: '12px' }}>
          Message sent — I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
