import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Nav/Navigation";
import { Wrapper, Container } from "./component/Login/Login.styles";

import Dashboard from "./component/Dashboard/Dashboard";

import Login from "./component/Login/Login";

function App() {
  return (
    <Fragment>
      <Container>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Wrapper>
              <Login />
            </Wrapper>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
