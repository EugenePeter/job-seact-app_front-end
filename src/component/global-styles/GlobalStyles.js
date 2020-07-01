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
