import { StyledContainer, StyledWrapper } from "./elements";

import {Card} from '../../collections/Card/Card'

export const Item = ({ cards, children, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        {cards.map((card) => (
          <Card
            key={card.title}
            card={card}
            width={card.width}
            backgroundColor={card.backgroundColor}
            link={card.link}
          />
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};
