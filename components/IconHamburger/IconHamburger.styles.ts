import styled, { css } from 'styled-components';

export type StyledIconHamburgerProps = {
  $isActive?: boolean;
};

const StyledIconHamburger = styled.div<StyledIconHamburgerProps>`
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: rotate(180deg);

      & span {
        &:nth-child(1) {
          transform: rotate(45deg) translate(0.5rem, 0.5rem);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate(0.7rem, -0.6rem);
        }
      }
    `}
`;

const StyledIconHamburgerLine = styled.span`
  display: block;

  width: 2.8rem;
  height: 0.3rem;

  background-color: ${({ theme }) => theme.color.main};

  &:not(:last-child) {
    margin: 0 0 0.5rem 0;
  }
`;

export { StyledIconHamburger, StyledIconHamburgerLine };
