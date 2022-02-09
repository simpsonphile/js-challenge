import styled from 'styled-components';

import { colorMixin, ColorProps } from 'themes/mixins/color';
import getFontScale, { FontScaleProps } from 'themes/mixins/getFontScale';
import { spacingMixin, SpacingProps } from 'themes/mixins/spacing';

export type StyledBoxProps = {
  padding?: number;
} & ColorProps &
  FontScaleProps &
  SpacingProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${colorMixin};
  ${getFontScale};
  ${spacingMixin};
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
