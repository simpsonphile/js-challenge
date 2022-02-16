import styled from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins/getColor';
import { getFontScale, FontScaleProps } from 'themes/mixins/getFontScale';
import { spacingMixin, SpacingProps } from 'themes/mixins/spacing';

export type StyledBoxProps = {
  padding?: number;
} & ColorProps &
  FontScaleProps &
  SpacingProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${getColor}
  ${getFontScale}
  ${spacingMixin}
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
