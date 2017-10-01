import React from 'react';
import GrommetApp from 'grommet/components/App';

const App = (props) => (

  <GrommetApp centered={false}>

      {props.children}

  </GrommetApp>
);

export default App;
