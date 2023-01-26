import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;


  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 150,
        height: 70,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >

    <img width="512" alt="Wikipedia - QPR Software - Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Wikipedia_-_QPR_Software_-_Logo.svg/512px-Wikipedia_-_QPR_Software_-_Logo.svg.png" />
      
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
