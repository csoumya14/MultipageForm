import styled from "styled-components";
import backgroundImageSideBar from "../../../public/images/bg-sidebar-mobile.svg";

export const Section = styled.section`
  display: flex;
  max-width: 100vw;
  background-color: ${(props) => props.theme.palette.primary.background};
  background-image: url(${backgroundImageSideBar.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
`;
