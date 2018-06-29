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

    return (
      <Menu fluid borderless attached inverted size="massive">
        <Menu.Item
          as={Link}
          to="/home"
          name='home'
          active={this.props.screen === 'home'}
          onClick={this.handleItemClick}
          className="menu-button"
        >
          home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/about"
          name='about'
          active={this.props.screen === 'about'}
          onClick={this.handleItemClick}
          className="menu-button"
        >
          about
        </Menu.Item>

          <Menu.Item
            as={Link}
            to="/contact"
            name='contact'
            active={this.props.screen === 'contact'}
            onClick={this.handleItemClick}
            className="menu-button"
          >
            contact
          </Menu.Item>

        <Menu.Item
          as={Link}
          to="/resume"
          name='resume'
          active={this.props.screen === 'resume'}
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
