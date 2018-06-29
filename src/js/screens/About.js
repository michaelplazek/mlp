import React from 'react';
import { Image, Grid, Header, Dimmer, Container } from 'semantic-ui-react';

class About extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
        <Grid padded>
          <Grid.Column width={6}>
            <Image src="https://i.imgur.com/K7Icfgs.jpg" size="medium" bordered rounded />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h4">About Michael</Header>
          </Grid.Column>
        </Grid>
    )
  }
}

export default About;
