import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Box, Heading } from 'grommet';

const Section = ({ title, children, color }) => (
  <Box align="center" pad='large' background={color} fill='horizontal'>
    <Box margin={{vertical: 'small'}}>
      <Heading level={2}>{title}</Heading>
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
