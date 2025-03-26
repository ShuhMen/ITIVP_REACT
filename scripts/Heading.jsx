import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const Heading = ({ title, align, color, sx }) => {
  return (
    <Box sx={{ mb: 4, ...sx }}>
      <Typography
        variant="h4"
        component="h1"
        align={align}
        color={color}
        sx={{
          fontWeight: 700,
          letterSpacing: '0.05rem',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.object,
};

Heading.defaultProps = {
  align: 'center',
  color: 'primary.main',
  sx: {},
};

export default Heading;