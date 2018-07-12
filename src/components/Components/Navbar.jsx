//@flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateNew from '../Pages/CreateNew/CreateNew.jsx';

type Props = {
  title: string
};

type State = {
  isOpen: boolean
};

const NavBar = (props: Props) => {
  const { title } = props;

  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">{title}</a>
          <div className="navbar-nav">
            <li className="nav-item nav-link">
              <Link to="/new">Create</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/new">Manage</Link>
            </li>
          </div>
      </nav>

      <Route path="/new" component={CreateNew} />
    </div>
  </Router>
    
  );
};

export default NavBar;
