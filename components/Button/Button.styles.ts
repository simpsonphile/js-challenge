import styled, { css, DefaultTheme } from 'styled-components';

import { mediaHover } from 'themes/mixins/mediaQueries';

export type StyledButtonProps = {
  genre?: 'primary' | 'secondary' | 'plain';
};

const buttonResetCss = css`
  cursor: pointer;
  color: inherit;
  background: transparent;
  border: none;
`;

const mainColor = ({ theme }: { theme: DefaultTheme }) => theme.color.main;
const hoverColor = ({ theme }: { theme: DefaultTheme }) =>
  theme.color.mainHover;

const ButtonSecondaryCss = css`
  border: 2px solid;
  border-color: ${mainColor};
  color: ${mainColor};
`;

const ButtonPrimaryCss = css`
  background-color: ${mainColor};

  ${mediaHover(css`
    background-color: ${hoverColor};
  `)}
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${buttonResetCss}

  ${({ genre }) =>
    genre !== 'plain' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: 4rem;
      min-width: 8rem;

      font-size: ${({ theme }) => theme.fontScales.base[0]};
      line-height: 1;

      border-radius: ${({ theme }) => theme.radiss[2]};

      transition: background-color 0.2s;

      ${genre === 'primary' && ButtonPrimaryCss}
      ${genre === 'secondary' && ButtonSecondaryCss}
    `}
`;

const StyledButtonIcon = styled.span`
  &:not(:last-child) {
    margin-right: 0.4rem;
  }

  &:not(:first-child) {
    margin-left: 0.4rem;
  }
`;

export { StyledButton, StyledButtonIcon };
