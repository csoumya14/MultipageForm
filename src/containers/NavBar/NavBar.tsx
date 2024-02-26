import { Dispatch, FC, SetStateAction, useRef } from "react";
import { StyledMenu } from "./NavBar.style";

import { LinkItems } from "../../components/LinkItems/LinkItems";
import { PageList } from "../../components/PageList/PageList";

interface linkPageListType {
  id: number;
  href: string;
  pageTitle: string;
}

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const linkPageList = [
    { id: 1, href: "/", pageTitle: "Your Info" },
    { id: 2, href: "/stepTwo", pageTitle: "Select Plan" },
    { id: 3, href: "/stepThree", pageTitle: "Add-ons" },
    { id: 4, href: "/stepFour", pageTitle: "summary" },
  ];

  return (
    <StyledMenu>
      <LinkItems
        items={linkPageList}
        renderItem={(listItem: linkPageListType) => (
          <PageList key={listItem.id} listItem={listItem} />
        )}
      />
    </StyledMenu>
  );
};
