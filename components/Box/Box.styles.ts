import styled from 'styled-components';

import { colorMixin, ColorProps } from 'themes/mixins/color';
import getFontScale, { FontScaleProps } from 'themes/mixins/getFontScale';
import { SpaceMixin, SpaceProps } from 'themes/mixins/space';

export type StyledBoxProps = {
  padding?: number;
} & ColorProps &
  FontScaleProps &
  SpaceProps;

const StyledBox = styled.div<StyledBoxProps>`
  ${colorMixin};
  ${getFontScale};
  ${SpaceMixin};
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

export { StyledBox };
