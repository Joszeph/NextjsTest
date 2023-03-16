import Image from 'next/image'

import {Item} from '../../components/Item/Item'

import {
  StyledTextContainer,

  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledSectionContainer,
  StyledVideoContainer,
} from "./elements";

import {
  StyledSectionBigHeading,
  StyledSectionHeading,
} from "../../components/Typography/elements";

export const Main = ({ cards, image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
     <StyledTextContainer>
        <StyledTitle>
          <StyledSectionBigHeading>{title}</StyledSectionBigHeading>
        </StyledTitle>
        <StyledSectionHeading>
          <StyledDescription>{description}</StyledDescription>
        </StyledSectionHeading>
      </StyledTextContainer>
      <StyledSectionContainer>
        <StyledVideoContainer>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledVideoContainer>
        <Item cards={cards} />
      </StyledSectionContainer>
    </StyledContainer>
  );
};
