//@flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import New from './New';
import Manage from './Manage';

type Props = {};

const Main = (props: Props) => {
  return (
    <Switch>
      <Route path="/new" component={New} />
      <Route path="/manage" component={Manage} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Main;
