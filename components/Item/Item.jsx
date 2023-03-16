import {
  StyledContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledWrapper,
} from "./elements";

import Image from "next/image";
import Link from "next/link";

import {
  StyledSectionSubheading,
  StyledSectionParagraph,
} from "../Typography/elements";

export const Item = ({ item, width, backgroundColor, link = "" }) => {
  const formatDescription = (description) => {
    const boldTexts = [
      "brief writing or simple guidance",
      "criteria matching",
      "pitch management",
    ];
    let formattedText = description;
    boldTexts.forEach((boldText) => {
      const startIndex = formattedText.indexOf(boldText);
      if (startIndex >= 0) {
        const endIndex = startIndex + boldText.length;
        formattedText = `${formattedText.slice(
          0,
          startIndex
        )}<strong>${boldText}</strong>${formattedText.slice(endIndex)}`;
      }
    });
    return formattedText;
  };

  return (
    <Link href={link}>
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
            <StyledSectionParagraph
              dangerouslySetInnerHTML={{
                __html: formatDescription(item.description),
              }}
            />
          </StyledTextContainer>
        </StyledWrapper>
      </StyledContainer>
    </Link>
  );
};
