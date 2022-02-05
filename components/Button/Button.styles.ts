import styled, { css, DefaultTheme } from 'styled-components';

export type StyledButtonProps = {
  genre?: 'primary' | 'secondary';
};

const mainColor = ({ theme }: { theme: DefaultTheme }) => theme.color.main;
const hoverColor = ({ theme }: { theme: DefaultTheme }) => theme.color.main;

const ButtonSecondaryCss = css`
  border: 2px solid;
  border-color: ${mainColor};
  color: ${mainColor};
`;

const ButtonPrimaryCss = css`
  background-color: ${mainColor};

  &:hover {
    background-color: ${hoverColor};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  height: 4rem;
  min-width: 8rem;

  ${({ theme }) => theme.getFontScale('base')}

  cursor: pointer;
  color: inherit;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.radiss[2]};

  ${({ genre }) => genre === 'primary' && ButtonPrimaryCss}
  ${({ genre }) => genre === 'secondary' && ButtonSecondaryCss}
`;

export { StyledButton };
