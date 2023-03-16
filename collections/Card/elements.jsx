// Styled elements for the Card go here
import styled, { css } from "styled-components";
import {
  SectionBigHeading
} from "~/components";

export const StyledWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 55px;
  height: 55px;
  margin: 0 0 0 40px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  padding: 0 50px 0 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0 0 -20px 0;
  color: black;
`;

export const StyledContainer = styled(({ width, ...props }) => (
  <div {...props} />
))`
  width: ${(props) => props.width}px;
  height: 142px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  border: 2px solid white;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.blue};

    ${StyledTitle} {
      color: ${({ theme }) => theme.blue};
      text-decoration: underline;
    }
  }
`;
