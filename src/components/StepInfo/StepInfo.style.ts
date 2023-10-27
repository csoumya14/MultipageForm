import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const StyledPara = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.grey};
  line-height: ${(props) => props.theme.lineHeight.bodyLargeScreen}px;
`;
