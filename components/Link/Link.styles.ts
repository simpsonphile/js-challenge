import styled, { css } from 'styled-components';

import { colorMixin, ColorProps } from 'themes/mixins/color';

export type StyledLinkProps = {
  isActive?: boolean;
  color?: ColorProps['color'];
};

const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;

  cursor: pointer;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.color.main};
      text-decoration: underline;
    `}

  ${colorMixin}
`;

export { StyledLink };
