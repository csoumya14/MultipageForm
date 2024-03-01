import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const StyledHeading = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.denim};
  padding: 0;
`;
