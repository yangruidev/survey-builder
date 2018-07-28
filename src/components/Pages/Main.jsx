//@flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import Manage from './Manage';

type Props = {};

const Main = (props: Props) => {
  return (
    <Switch>
      {/*temp change for dev*/}
      <Route path="/" component={Edit} />
      <Route path="/manage" component={Manage} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Main;
