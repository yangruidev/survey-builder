import React from 'react';
import { Base, Grid } from 'reakit';
import { Button } from '../../Components/StyledComponents.jsx';
import NavigationBar from '../../Components/Navbar.jsx';
import 'bootstrap';
import NavBar from '../../Components/Navbar.jsx';

const Home = () => {
  return (
    <Base>
      <NavBar title='Survey Builder' />
      <Grid columns="repeat(3, 1fr)" autoRows="auto" gap="1vw">
        <Grid.Item columnStart='2' columnEnd='3'>
          <Button>Create a new survey</Button>
        </Grid.Item>
      </Grid>
    </Base>
  );
};

export default Home;