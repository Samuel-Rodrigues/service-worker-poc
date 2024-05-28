import styled, { css } from "styled-components";

import { Props, ORIENTATIONS } from "./index";

type LabelProps = {
  orientation: keyof typeof ORIENTATIONS;
};

const WRAPPER_WIDTH_SIZE = {
  HORIZONTAL: "100%",
  VERTICAL: "20px",
};

const WRAPPER_HEIGHT_SIZE = {
  HORIZONTAL: "20px",
  VERTICAL: "100%",
};

export const Wrapper = styled.div<Props>`
  width: ${({ orientation }) => WRAPPER_WIDTH_SIZE[orientation]};
  height: ${({ orientation }) => WRAPPER_HEIGHT_SIZE[orientation]};
  background-color: #e0e0df;
  border-radius: 50px;
  margin: 50px 0;
  display: flex;
  ${(props) =>
    props.orientation === "VERTICAL" &&
    css`
      flex-direction: column-reverse;
    `}
`;

export const Filler = styled.div<Props>`
  ${({ percentage, orientation }) =>
    orientation === "HORIZONTAL"
      ? css`
          height: 100%;
          width: ${percentage}%;
        `
      : css`
          width: 100%;
          height: ${percentage}%;
        `}
  background-color: ${({ percentage }) =>
    percentage < 100 ? "#4caf50" : "#f44336"};
  border-radius: inherit;
  text-align: right;
  transition: all 0.5s ease-in-out;
`;

export const Label = styled.span<LabelProps>`
  color: white;
  font-weight: bold;
  ${({ orientation }) =>
    orientation === ORIENTATIONS.HORIZONTAL
      ? css`
          align-self: center;
        `
      : css`
          align-self: flex-end;
        `}
`;
