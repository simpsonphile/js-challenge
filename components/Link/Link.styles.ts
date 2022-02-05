import styled, { css } from 'styled-components';

export type StyledLinkProps = {
  isActive?: boolean;
  color?: string;
};

const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;

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

  // todo color function (less boilerplate)
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export { StyledLink };
