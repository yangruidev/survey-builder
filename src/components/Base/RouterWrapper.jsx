/* A abstract router with no UI. Require prop.children for UI implementation */
//@flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

type Props = {
  children: Object,
  routeConfig: Array<Object>
};

const RouterWrapper = (props: Props) => {
  return (
    <Router>
      <div>
        {props.children}
        {props.routeConfig.map(r => {
          return <Route key={r.key} path={r.path} component={r.component} />;
        })}
      </div>
    </Router>
  );
};

export default RouterWrapper;
