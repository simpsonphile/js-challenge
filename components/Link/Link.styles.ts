import styled, { css } from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins/getColor';

export type StyledLinkProps = {
  isActive?: boolean;
} & Pick<ColorProps, '$color'>;

const StyledLink = styled.a<StyledLinkProps>`
  ${getColor}

  text-decoration: none;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.color.main};
      text-decoration: underline;
    `}
`;

export { StyledLink };
