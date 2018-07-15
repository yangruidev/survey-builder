//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouterWrapper from '../Base/RouterWrapper.jsx';

type Props = {
  title: string,
  routeConfig: Array<Object>
};

const NavBar = (props: Props) => {
  const { title, routeConfig } = props;

  return (
    <RouterWrapper routeConfig={routeConfig}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <div className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to="/new">Create</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/new">Manage</Link>
          </li>
        </div>
      </nav>
    </RouterWrapper>
  );
};

export default NavBar;
