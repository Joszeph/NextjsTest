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
} from "../../components/Typography/elements";

export const Card = ({ card, width, backgroundColor, link = "" }) => {
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
            {card.image?.src && (
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                layout="fixed"
              />
            )}
          </StyledImageContainer>
          <StyledTextContainer>
            <StyledTitle>
              <StyledSectionSubheading fontWeight="700">
                {card.title}
              </StyledSectionSubheading>
            </StyledTitle>
            <StyledSectionParagraph
              dangerouslySetInnerHTML={{
                __html: formatDescription(card.description),
              }}
            />
          </StyledTextContainer>
        </StyledWrapper>
      </StyledContainer>
    </Link>
  );
};
