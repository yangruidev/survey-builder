//@flow
import React from 'react';
import styled from 'react-emotion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Shared/Navbar';
import Footer from '../Base/Footer';
import Main from './Main';

const Wrapper = styled('div')`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-areas:
    'nav'
    'main'
    'footer';
  grid-template-rows: 66px 1fr 80px;
`;

const NavWrapper = styled('nav')`
  grid-area: nav;
  min-width: 800px;
`;

const MainWrapper = styled('div')`
  grid-area: main;
  min-width: 800px;
`;

const FooterWrapper = styled('footer')`
  grid-area: footer;
  min-width: 800px;
`;

const App = () => {
  return (
    <Router>
      <Wrapper>
        <NavWrapper className="container">
          <NavBar title="Survey Builder" />
        </NavWrapper>
        <MainWrapper className="container">
          <Main />
        </MainWrapper>
        <FooterWrapper>
          <Footer content="2018" brand="SurveyBuilder" author="Ray" />
        </FooterWrapper>
      </Wrapper>
    </Router>
  );
};

export default App;
