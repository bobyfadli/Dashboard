import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography variant="h6" sx={{ pt: 3.75, textAlign: { xs: 'center', md: 'right' } }}>
      Made with{' '}
      <Box component="span" sx={{ color: 'error.main', verticalAlign: 'middle' }}>
        &#10084;
      </Box>{' '}
      by{' '}
      <Link
        href="https://themewagon.com/"
        sx={{ color: 'neutral.dark', '&:hover': { color: 'secondary.main' } }}
      >
        ThemeWagon
      </Link>
    </Typography>
  );
};

export default Footer;
