import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 1rem;
  background: ${(props) => props.theme.palette.primary.veryLightGrey};
`;
export const ListItemPlan = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.palette.primary.denim};
  font-weight: bold;
  border-bottom: 1px solid grey;
`;

export const ListItemOption = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.palette.primary.grey};
`;

export const ListItemTotal = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.palette.primary.grey};
  background: white;
`;
