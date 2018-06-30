import React from 'react';
import { Responsive } from 'grommet';

// TODO: fix this function
const makeResponsive = (WrappedComponent) => {
  const makeResponsive = props => (
    <Responsive>
      <WrappedComponent narrow={props.narrow} {...props}/>
    </Responsive>
  );

  return makeResponsive;
};

export default makeResponsive;
