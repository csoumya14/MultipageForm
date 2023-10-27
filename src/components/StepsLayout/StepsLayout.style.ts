import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem 0rem 1rem;
  align-items: center;
  gap: 3rem;
  flex: 1;
  width: 100%;
`;

export const Wrapper = styled.div`
  border-radius: 4px;
  flex: 2;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;
