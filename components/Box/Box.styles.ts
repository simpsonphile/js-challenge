import styled from 'styled-components';

import { color, ColorProps } from 'themes/mixins/color';

export type StyledBoxProps = {
  padding?: number;
} & ColorProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${color};
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
