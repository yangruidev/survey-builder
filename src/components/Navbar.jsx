//@flow
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

type Props = {
  title: string
};

type State = {
  isOpen: boolean
};

const NavigationBar = (props: Props) => {
  const { title } = props;

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{title}</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
