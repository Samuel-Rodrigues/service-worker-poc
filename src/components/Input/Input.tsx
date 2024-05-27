import { InputHTMLAttributes } from "react";

type InputProps = { isFocus?: boolean } & InputHTMLAttributes<HTMLInputElement>;

import { Wrapper } from "./styles";

export function Input({ isFocus = false, ...rest }: InputProps) {
  return <Wrapper isFocus={isFocus} {...rest} />;
}
