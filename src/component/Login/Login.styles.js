import styled, { css, createGlobalStyle } from "styled-components";

export const Modifiers = createGlobalStyle`
.logo {
  position: relative;
  width: 46%;
  box-sizing: border-box;
}

.margin-t {
  margin-top: 1rem;
}

.move {
transform: translateY(-8%);
}
`;

export const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfdff;
`;

export const Wrapper = styled.nav`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    max-width: 60rem;
  }
`;

export const LoginWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f26622;
  width: 100%;

  h1 {
    color: #fff;
    margin-top: 4rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #fff;

  height: 4rem;
  border: none;
  margin-top: 3rem;
  padding-left: 2rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #f26622;
  height: 4rem;
  border: 2px solid #fff;
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: #fff;
  font-size: 1.5rem;
`;
