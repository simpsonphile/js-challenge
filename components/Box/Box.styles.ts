import styled from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins/getColor';
import { getFontScale, FontScaleProps } from 'themes/mixins/getFontScale';
import { getSize, SizeProps } from 'themes/mixins/getSize';
import { getSpacing, SpacingProps } from 'themes/mixins/getSpacing';

export type StyledBoxProps = ColorProps &
  FontScaleProps &
  SpacingProps &
  SizeProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${getColor}
  ${getFontScale}
  ${getSpacing}
  ${getSize}
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
