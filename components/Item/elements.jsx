import styled, { css } from "styled-components";

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  // width:435px;
  // height:142px;
  // background-color:#f9f9f9;
  // background-color:red;
  // border-radius:15px;
`;

export const StyledWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-top: 23px;
`;
