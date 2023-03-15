import Image from 'next/image'

import {Card}  from "../../collections/Card/Card" 

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
        <Card items={items} />
      </StyledSectionContainer>

    </StyledContainer>
  );
};
