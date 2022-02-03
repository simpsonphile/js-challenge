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

  ${({ isActive }) =>
    isActive &&
    css`
      color: blue;
      text-decoration: underline;
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export { StyledLink };
