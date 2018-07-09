//@flow
import React, { Component } from "react";
import "../styles/basic.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Navbar.jsx";
import Body from "./Body.jsx";

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
