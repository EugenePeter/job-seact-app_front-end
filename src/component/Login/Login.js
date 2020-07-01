import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./Login.styles.js";
import { LoginWrapper, Input, Wrapper, Button, Modifiers } from "./Login.styles";

function Login(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.history.push("/dashboard");
  };

  return (
    <Fragment>
      <Modifiers />
      <LoginWrapper className="move">
        <Wrapper>
          <h1>Login</h1>
          <Input type="text" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Button onClick={handleClick}> Login</Button>
        </Wrapper>
      </LoginWrapper>
    </Fragment>
  );
}

export default withRouter(Login);
