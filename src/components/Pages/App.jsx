//@flow
import React from 'react';
import 'bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../Shared/Navbar';
import Footer from '../Base/Footer';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <NavBar title="Survey Builder" />
        </nav>
        <main>
          <Main />
        </main>
        <footer>
          <Footer content="Hello world" />
        </footer>
      </div>
    </Router>
  );
};

export default App;
