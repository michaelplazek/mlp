import React from 'react';
import { Image, Header, Dimmer, Container } from 'semantic-ui-react';

class IntroSection extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <Dimmer.Dimmable className="dimmer" dimmed>

          <Dimmer active>
            <Container className="dimmer-container">

            </Container>
          </Dimmer>

          <Image />

      </Dimmer.Dimmable>
    );
  }
}

export default IntroSection;
