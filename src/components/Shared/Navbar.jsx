//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string
};

const NavBar = (props: Props) => {
  const { title } = props;

  return (
    <nav className="level">
      <div className="level-left">
        <a className="level-item" href="/">
          {title}
        </a>
        <li className="level-item">
          <Link to="/new" className="button is-light">
            Create
          </Link>
        </li>
        <li className="level-item">
          <Link to="/manage" className="button is-light">
            Manage
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
