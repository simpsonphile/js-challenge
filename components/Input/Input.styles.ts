import styled from 'styled-components';

export type StyledInputProps = {
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
};

export type StyledInputIconWrapProps = {
  $position: 'left' | 'right';
};

const StyledInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: ${({ theme }) => theme.spacing.s};

  border: 2px solid;
  border-color: ${({ theme }) => theme.color.main};
  border-radius: ${({ theme }) => theme.radiss[2]};
  box-shadow: ${({ theme }) => theme.shadow.default};

  &:hover {
    border-color: ${({ theme }) => theme.color.main2};
  }

  &:focus-within {
    outline: ${({ theme }) => theme.outline.focus};
  }
`;

const StyledInput = styled.input<StyledInputProps>`
  flex-basis: 100%;

  min-width: 0;

  color: ${({ theme }) => theme.color.text};
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

const StyledInputIconWrap = styled.span<StyledInputIconWrapProps>`
  display: flex;
  pointer-events: none;
`;

export { StyledInputWrap, StyledInput, StyledInputIconWrap };
