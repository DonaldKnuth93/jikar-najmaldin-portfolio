'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
  Stack,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  Twitter,
  GitHub,
  Send,
  ContentCopy,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
    href: 'https://linkedin.com/in/jikarnajmaldin',
    color: '#0A66C2',
  },
  {
    label: 'Twitter / X',
    icon: <Twitter />,
    href: 'https://twitter.com/jikarnajm',
    color: '#1DA1F2',
  },
  {
    label: 'GitHub',
    icon: <GitHub />,
    href: 'https://github.com/jikarnajm',
    color: '#6e5494',
  },
];

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'hello@jikarnajm.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=Hello from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailtoUrl, '_blank');
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 400,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
              Get in touch
            </Typography>
            <Typography variant="h2" sx={{ mb: 2.5 }}>
              Let's build{' '}
              <Box component="span" className="gradient-text">
                something great
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              Have a project in mind, want to partner, or just want to say hello?
              I'm always open to interesting conversations.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left: contact info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Email card */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  background: isDark ? 'rgba(13,13,22,0.6)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(34,211,238,0.15))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <Email fontSize="small" />
                  </Box>
                  <Typography fontWeight={600}>Email me directly</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  I typically respond within 24 hours.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1.5,
                    borderRadius: 2,
                    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" fontWeight={500} color="primary.main">
                    {email}
                  </Typography>
                  <Tooltip title={copied ? 'Copied!' : 'Copy email'}>
                    <IconButton
                      size="small"
                      onClick={handleCopyEmail}
                      sx={{ color: copied ? 'success.main' : 'text.secondary' }}
                    >
                      {copied ? <CheckCircle fontSize="small" /> : <ContentCopy fontSize="small" />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Paper>

              {/* Social links */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  background: isDark ? 'rgba(13,13,22,0.6)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography fontWeight={600} mb={2}>
                  Find me online
                </Typography>
                <Stack spacing={1.5}>
                  {socialLinks.map((social) => (
                    <Box
                      key={social.label}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        color: 'text.primary',
                        '&:hover': {
                          borderColor: social.color + '60',
                          background: social.color + '10',
                          transform: 'translateX(4px)',
                          color: social.color,
                        },
                      }}
                    >
                      <Box sx={{ color: 'inherit', display: 'flex' }}>{social.icon}</Box>
                      <Typography variant="body2" fontWeight={500}>
                        {social.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right: Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Paper
                elevation={0}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 5 },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  background: isDark ? 'rgba(13,13,22,0.6)' : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2.5,
                          '& fieldset': { borderColor: 'divider' },
                          '&:hover fieldset': { borderColor: 'primary.main' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2.5,
                          '& fieldset': { borderColor: 'divider' },
                          '&:hover fieldset': { borderColor: 'primary.main' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      variant="outlined"
                      placeholder="Tell me about your project, idea, or just say hello..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2.5,
                          '& fieldset': { borderColor: 'divider' },
                          '&:hover fieldset': { borderColor: 'primary.main' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      fullWidth
                      sx={{
                        py: 1.75,
                        fontSize: '1rem',
                      }}
                    >
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={sent}
        autoHideDuration={4000}
        onClose={() => setSent(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" onClose={() => setSent(false)} sx={{ borderRadius: 2 }}>
          Message sent! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
