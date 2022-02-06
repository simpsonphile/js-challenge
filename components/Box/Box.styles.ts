import styled from 'styled-components';

import { colorMixin, ColorProps } from 'themes/mixins/color';
import getFontScale, { FontScaleProps } from 'themes/mixins/getFontScale';

export type StyledBoxProps = {
  padding?: number;
} & ColorProps &
  FontScaleProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${colorMixin};
  ${getFontScale};
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
