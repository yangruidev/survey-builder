//@flow
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../Shared/Navbar';
import Footer from '../Base/Footer';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <nav className="container">
          <NavBar title="Survey Builder" />
        </nav>
        <main className="container">
          <Main />
        </main>
        <footer>
          <Footer content="2018" brand="SurveyBuilder" author="Ray" />
        </footer>
      </div>
    </Router>
  );
};

export default App;
