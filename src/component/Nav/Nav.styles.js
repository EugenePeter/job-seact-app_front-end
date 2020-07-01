import styled, { css, createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";

export const Modifiers = createGlobalStyle`
.logo {
  position: relative;
  width: 46%;
  box-sizing: border-box;
}

.margin-t {
  margin-top: 1rem;
}
`;

export const Nav = styled.nav`
  position: relative;
  /* height: 10.25rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 25px; */
  background-color: #fff;
  /* padding-bottom: 1rem; */

  -webkit-box-shadow: 0px 28px 59px -46px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 28px 59px -46px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 28px 59px -46px rgba(0, 0, 0, 0.22);

  a {
    text-decoration: none;
    /* color: #3bc453; */
  }
`;

const home = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const getLogoContainerStyles = (props) => {
  if (props.home) {
    return home;
  }
};

export const LogoWrapper = styled(Link)`
  width: 90%;
  /* background-color: yellow; */
`;

export const LogoContainer = styled(Link)`
  position: relative;
  height: 100%;
  width: 40% !important;
  /* padding: 25px; */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* cursor: pointer; */
  }

  ${getLogoContainerStyles}

  @media screen and (min-width: 768px) {
    max-width: 16%;
  }
`;

export const NavItems = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItemsInner = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const TopNav = styled.div`
  width: 90%;
  height: 50px;
  /* background-color: gray; */
  padding-top: 1rem;
`;

export const MainNav = styled.div`
  display: flex;
  width: 90%;
  height: 160px;
  /* background-color: green; */
  /* padding-bottom: 1rem; */

  @media screen and (min-width: 992px) {
    max-width: 60rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff6501;
  }
`;
