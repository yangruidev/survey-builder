import React from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';

import RouterWrapper from '../../Base/RouterWrapper.jsx';
import NavBar from '../../Lib/Navbar.jsx';
import Footer from '../../Base/Footer.jsx';
import { RoundButton } from '../../Base/Button.jsx';
import CreateNew from '../CreateNew/CreateNew.jsx';

const Home = () => {
  const routeConfig = [{ key: 'new', path: '/new', component: CreateNew }];

  return (
    <div className="wrapper">
      <nav>
        <NavBar title="Survey Builder" routeConfig={routeConfig} />
      </nav>
      <main>
        <div className="container">Hello World</div>
      </main>
      <footer>
        <Footer content="Hello world" />
      </footer>
    </div>
  );
};

export default Home;
