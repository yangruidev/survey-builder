//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string
};

const NavBar = (props: Props) => {
  const { title } = props;

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        {title}
      </a>
      <div className="navbar-nav">
        <li className="nav-item nav-link">
          <Link to="/new">Create</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/manage">Manage</Link>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
