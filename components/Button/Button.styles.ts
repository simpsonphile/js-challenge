import styled, { css, DefaultTheme } from 'styled-components';

export type StyledButtonProps = {
  genre?: 'primary' | 'secondary';
};

const main = ({ theme }: { theme: DefaultTheme }) => theme.color.main.c;

const ButtonSecondaryCss = css`
  border: 2px solid;
  border-color: ${main};
  color: ${main};
`;

const ButtonPrimaryCss = css`
  background-color: ${main};
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
