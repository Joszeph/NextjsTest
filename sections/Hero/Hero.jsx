import Image from 'next/image'

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

export const Hero = ({ items, image, title, description, ...props }) => {
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
      </StyledSectionContainer>
    </StyledContainer>
  );
};
