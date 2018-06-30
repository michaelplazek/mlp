import React from 'react';
import { Box, Paragraph } from 'grommet';

import Section from '../../components/Section';

export const AboutMe = () => (
  <Section title="About Me" color="dark-2">
    <Box align="center" width="large">
      <Paragraph size="large">My name is Michael. I'm a systems software engineer interested in large scale.</Paragraph>
    </Box>
  </Section>
);

