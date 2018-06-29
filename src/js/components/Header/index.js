import React from 'react';
import NavigationBar from './components/NavigationBar';
import { Container } from 'semantic-ui-react';
import IntroSection from './components/IntroSection';
import About from './screens/About';

const App = () => (
  <div id="app-container">
    <Header />
    {this.children}
  </div>
);

export default App;
