import styled, { css } from 'styled-components';

type StyledButtonProps = {
  genre?: string;
};

const ButtonSecondaryCss = css`
  border: 2px solid;
  border-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.main};
`;

const ButtonPrimaryCss = css`
  background-color: ${({ theme }) => theme.main};
`;

const StyledButton = styled.button<StyledButtonProps>`
  height: 4rem;
  min-width: 8rem;

  ${({ theme }) => theme.getFontScale('base')}

  color: inherit;
  background: transparent;
  border: none;
  border-radius: 0.4rem;

  ${({ genre }) => genre === 'primary' && ButtonPrimaryCss}
  ${({ genre }) => genre === 'secondary' && ButtonSecondaryCss}
`;

export { StyledButton };
