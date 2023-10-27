import React from "react";
import { Container } from "./LinkItems.style";

type Props<Item, As extends React.ElementType> = {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  as?: As;
};

export const LinkItems = <Item, As extends React.ElementType>({
  items,
  renderItem,
  as,
}: Props<Item, As>) => {
  return <Container>{items.map(renderItem)}</Container>;
};
