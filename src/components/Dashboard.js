import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Home from './Home/Home';
export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-areas:
    'sidebar main main main'
    'sidebar main main main'
    'sidebar main main main';
  grid-template-rows: 150px 1fr 150px;
  grid-template-columns: 250px 1fr;

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 150px;
    grid-template-areas:
      'header'
      'main'
      'main';
  }
`;

const Main = styled.div`
  grid-area: main;
  background: #00c781;
  padding: 5vh;
`;
const Dashboard = () => {
  let { path } = useRouteMatch();

  return (
    <Container>
      <Sidebar />
      <Main>
        <Switch>
          <Route exact path={path}>
            <Home />
          </Route>
          <Route path={`${path}/municipio`}>
            <Municipio />
          </Route>
          <Route path={`${path}/colonia`}>
            <Colonia />
          </Route>
          <Route path={`${path}/habitantes`}>
            <Habitantes />
          </Route>
          <Route path={`${path}/genero`}>
            <Genero />
          </Route>
        </Switch>
      </Main>
    </Container>
  );
};

const Municipio = () => {
  return (
    <div>
      <h1>Municipio</h1>
    </div>
  );
};
const Colonia = () => {
  return (
    <div>
      <h1>Colonia</h1>
    </div>
  );
};
const Habitantes = () => {
  return (
    <div>
      <h1>Habitantes</h1>
    </div>
  );
};
const Genero = () => {
  return (
    <div>
      <h1>Genero</h1>
    </div>
  );
};
export default Dashboard;
