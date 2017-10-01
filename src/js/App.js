import React from 'react';
import { Container, Menu } from 'semantic-ui-react'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { activeItem: 'home' }
  }

  handleItemClick(){
    return (e, { name }) => this.setState({ activeItem: name });
  }

  render(){
    const { activeItem } = this.state;

    return(
      <Container>

        <Menu pointing secondary size="huge">
          <Menu.Menu position="right">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick} />
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        {this.children}

      </Container>
    );
  }
}

export default App;
