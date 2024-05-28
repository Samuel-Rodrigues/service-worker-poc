import * as S from "./styles";

export enum ORIENTATIONS {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

export type Props = {
  percentage: number;
  orientation: keyof typeof ORIENTATIONS;
};

export function ProgressBar({
  orientation = ORIENTATIONS.HORIZONTAL,
  percentage = 0,
}: Props) {
  return (
    <S.Wrapper orientation={orientation} percentage={percentage}>
      <S.Filler percentage={percentage} orientation={orientation}>
        <S.Label orientation={orientation}>{`${percentage}%`}</S.Label>
      </S.Filler>
    </S.Wrapper>
  );
}
