//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

type Props = {
  title: string
};

const NavBarWrapper = styled('nav')`
  padding: 15px 0;
`;

const NavBar = (props: Props) => {
  const { title } = props;

  return (
    <NavBarWrapper className="level">
      <div className="level-left">
        <a className="level-item" href="/">
          {title}
        </a>
        <li className="level-item">
          <Link to="/edit" className="button is-light">
            Edit
          </Link>
        </li>
        <li className="level-item">
          <Link to="/preview" className="button is-light">
            Preview
          </Link>
        </li>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
