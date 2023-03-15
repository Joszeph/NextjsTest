import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  display:flex;
  flex-direction: column;
  
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: -30px 0 0;
  font-size: 1.5rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin: 0 auto 60px auto;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledSectionContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 890px;
  margin: 0 auto;
  display: flex;
  gap: 70px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin: -42px 0 0 0;
  }
`;

export const StyledVideoContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 327px;
  height: 520px;
`;
