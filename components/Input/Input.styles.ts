import styled, { css } from 'styled-components';

export type StyledInputProps = {
  hasIcon?: boolean;
};

const StyledInputWrap = styled.div`
  position: relative;

  width: 100%;
`;

const StyledInput = styled.input<StyledInputProps>`
  padding: ${({ theme }) => theme.spacing.s};

  ${({ theme, hasIcon }) =>
    hasIcon &&
    css`
      padding-right: calc(${theme.spacing.s} + ${theme.spacing.s} + 1em);
    `}

  color: ${({ theme }) => theme.color.text};
  border: 2px solid;
  border-color: ${({ theme }) => theme.color.main};
  border-radius: ${({ theme }) => theme.radiss[2]};
  background-color: transparent;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.mainHover};
  }
`;

const StyledInputIconWrap = styled.span`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.s};

  display: flex;

  transform: translateY(-50%);
`;

export { StyledInputWrap, StyledInput, StyledInputIconWrap };
