import React from 'react';
import NavigationBar from './components/NavigationBar';
import { Container } from 'semantic-ui-react';
import IntroSection from './components/IntroSection';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div id="main">
        <Container fluid className="main-container">
          <NavigationBar />

        {this.children}
        </Container>
      </div>
    );
  }
}

export default App;
