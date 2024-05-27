import styled, { css } from "styled-components";

type Props = {
  isFocus: boolean;
};

export const Wrapper = styled.input<Props>`
  ${({ isFocus }) =>
    isFocus &&
    css`
      border: 2px solid blue;
    `}
`;
