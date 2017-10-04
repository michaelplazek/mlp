import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {activeItem:""};
  }

  handleItemClick() {
    return (e, {name}) => this.setState({activeItem: name});
  }

  render(){

    const { activeItem } = this.state;

    return (
      <Menu borderless attached inverted size="massive">
        <Menu.Item
          as={Link}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          className="menu-button"
        >
          home
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          className="menu-button"
        >
          about
        </Menu.Item>

          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            className="menu-button"
          >
            contact
          </Menu.Item>

        <Menu.Item
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
          className="menu-button"
        >
          resume
        </Menu.Item>

          <Menu.Item
            as={Link}
            to="/terminal"
            position="right"
            onClick={this.handleItemClick}
            className="menu-button"
            name="terminal"
            icon="terminal"
          />
      </Menu>
    );
  }
}

export default NavigationBar;
