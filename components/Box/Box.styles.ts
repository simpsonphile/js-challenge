import styled from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins/getColor';
import { getFontScale, FontScaleProps } from 'themes/mixins/getFontScale';
import { getSpacing, SpacingProps } from 'themes/mixins/spacing';

export type StyledBoxProps = {
  padding?: number;
} & ColorProps &
  FontScaleProps &
  SpacingProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${getColor}
  ${getFontScale}
  ${getSpacing}
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
