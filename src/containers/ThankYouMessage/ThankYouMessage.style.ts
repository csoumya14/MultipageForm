import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;

export const StyledThanks = styled(Banner)`
color: ${(props) => props.theme.palette.primary.denim};
`

export const ThankyouMessage = styled(Banner)`
  text-align: center;
  color: ${(props) => props.theme.palette.primary.grey};
`;
