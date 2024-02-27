import styled from "styled-components";
import backgroundImageSideBar from "../../../public/images/bg-sidebar-mobile.svg";

export const StyledMenu = styled.nav`
  display: flex;
  z-index: 0;
  padding-top: 2.5rem;
  flex-direction: row;
  padding-bottom: 3rem;
  width: 100%;
  background-image: url(${backgroundImageSideBar.src});
  justify-content: center;
  align-items: center;
`;
