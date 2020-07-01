import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Nav, MainNav, TopNav, LogoContainer, LogoWrapper } from "./Nav.styles";

function Navigation() {
  return (
    <Fragment>
      <Nav>
        <MainNav>
          <LogoWrapper>
            <LogoContainer to="/">
              <Logo />
            </LogoContainer>
          </LogoWrapper>
          <div>Logout</div>
        </MainNav>
      </Nav>
    </Fragment>
  );
}

export default Navigation;
