//@flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import Preview from './Preview';

type Props = {};

const Main = (props: Props) => {
  return (
    <Switch>
      {/*temp change for dev*/}
      <Route path="/" component={Edit} />
      <Route path="/preview" component={Preview} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Main;
