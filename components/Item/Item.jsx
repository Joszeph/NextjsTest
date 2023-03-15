import {
    StyledContainer,
    StyledImageContainer,
    StyledTextContainer,
    StyledTitle,
    StyledWrapper,
  } from "./elements";
  
  import Image from "next/image";
  
  import {
    StyledSectionSubheading,
    StyledSectionParagraph,
  } from "../Typography/elements";
  
  export const Item = ({ item, width, backgroundColor }) => {
    const boldDescription = item.description
      .replace(
        "brief writing or simple guidance",
        "<strong>brief writing or simple guidance</strong>"
      )
      .replace("criteria matching", "<strong>criteria matching</strong>")
      .replace("pitch management", "<strong>pitch management</strong>");
  
    return (
      <StyledContainer width={width} backgroundColor={backgroundColor}>
        <StyledWrapper>
          <StyledImageContainer>
            {item.image?.src && (
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                layout="fixed"
              />
            )}
          </StyledImageContainer>
          <StyledTextContainer>
            <StyledTitle>
              <StyledSectionSubheading fontWeight="700">
                {item.title}
              </StyledSectionSubheading>
            </StyledTitle>
            <StyledSectionParagraph dangerouslySetInnerHTML={{ __html: boldDescription }} />
          </StyledTextContainer>
        </StyledWrapper>
      </StyledContainer>
    );
  };
  