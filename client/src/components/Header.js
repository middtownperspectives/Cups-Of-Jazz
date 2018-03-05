import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar brand='Jazzy Tea' className='fixed' right>
        <NavItem href='/teas' ><Icon>kitchen</Icon></NavItem>
        <NavItem href='/about' ><Icon>sort</Icon></NavItem>
        <NavItem href='/login'><Icon>person</Icon></NavItem>
      </Navbar>

    );
  }
}

export default Header;
