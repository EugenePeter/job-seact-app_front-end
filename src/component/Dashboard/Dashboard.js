import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { Container } from "../global-styles/GlobalStyles";

import { ReactComponent as VacancyView } from "../../assets/VacancyView.svg";

function Dashboard() {
  return (
    <Fragment>
      <Container>
        <VacancyView />
      </Container>
    </Fragment>
  );
}

export default Dashboard;
