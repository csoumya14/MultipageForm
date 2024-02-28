import styled from "styled-components";
import backgroundImageSideBarMobile from "../../../public/images/bg-sidebar-mobile.svg";
import backgroundImageSideBarDesktop from "../../../public/images/bg-sidebar-desktop.svg";

export const StyledMenu = styled.nav`
  display: flex;
  z-index: 0;
  padding-top: 2.5rem;
  flex-direction: row;
  padding-bottom: 3rem;
  width: 100%;
  background-image: url(${backgroundImageSideBarMobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    background-image: url(${backgroundImageSideBarDesktop.src});
    background-size: contain;
    width: fit-content;
    background-position: start;
    align-items: flex-start;
    justify-content: start;
  }
`;
