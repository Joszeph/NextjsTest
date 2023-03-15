import Image from "next/image";

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
    
    </StyledContainer>
  );
};
