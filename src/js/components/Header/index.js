import React from 'react';
import { Link } from 'react-router-dom'
import { compose } from 'recompose';
import { Box, RoutedButton } from 'grommet';
import { Terminal } from 'grommet-icons';

import { routes } from '../../config/routes';

const Header = (props) => (
  <Box background="light-3" justify='between' pad="small" fill='horizontal' direction="row">
    <Box gap="small" direction="row">
      {routes.map(item =>
      <Box key={item.label} pad="small">
        <RoutedButton plain={true} path={item.path} size="medium" label={item.label}/>
      </Box>
      )}
    </Box>
    <Box justify="end">
      <RoutedButton icon={<Terminal size="small"/>} path='/terminal' size="medium"/>
    </Box>
  </Box>
);

export default Header;
