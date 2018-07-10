//@flow
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/basic.scss';
import NavigationBar from './Navbar.jsx';
import Body from './Body/Body.jsx';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <NavigationBar title="Survey Builder" />
        <div className="container">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
