import { FC } from "react";
import {
  StyledLink,
  StyledList,
  StyledStepNumber,
  StyledStep,
  StyledInfo,
} from "./PageList.style";
import { usePathname } from "next/navigation";

interface listItemType {
  id: number;
  href: string;
  pageTitle: string;
}

interface PageListProps {
  listItem: listItemType;
}

export const PageList: FC<PageListProps> = ({ listItem }) => {
  const pathname = usePathname();

  return (
    <StyledList key={listItem.id} className="fontBarlowCondensed">
      <StyledLink
        key={listItem.id}
        aria-current={listItem.href === pathname ? "page" : undefined}
      >
        {listItem.id}
      </StyledLink>
      <StyledStepNumber>
        <StyledStep>step{listItem.id}</StyledStep>
        <StyledInfo>{listItem.pageTitle}</StyledInfo>
      </StyledStepNumber>
    </StyledList>
  );
};
