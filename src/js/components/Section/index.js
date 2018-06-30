import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Box, Heading } from 'grommet';

const Section = ({ title, children, color }) => (
  <Box pading="large" background={color} fill='horizontal'>
    <Box justify="center" medium="medium">
      <Heading level={3}>{title}</Heading>
    </Box>
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

Section.defaultProps = {
};

export default Section;
