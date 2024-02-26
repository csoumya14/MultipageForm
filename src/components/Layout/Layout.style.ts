import styled from "styled-components";
import backgroundImageSideBar from "../../../public/images/bg-sidebar-mobile.svg";

export const Section = styled.section`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.primary.background};
  background-image: url(${backgroundImageSideBar.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
`;
