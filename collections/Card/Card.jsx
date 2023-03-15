import { StyledContainer, StyledWrapper } from "./elements";

import { Item } from "../../components/Item/Item";

export const Card = ({ items, children, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        {items.map((item) => (
          <Item
            key={item.title}
            item={item}
            width={item.width}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};
