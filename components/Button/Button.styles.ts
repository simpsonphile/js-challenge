import styled, { css } from 'styled-components';

import { getColor } from 'themes/mixins/getColor';
import { mediaHover } from 'themes/mixins/mediaQueries';

type Variant = 'primary' | 'secondary';

export type StyledButtonProps = {
  variant?: Variant;
};

const variants = {
  secondary: css`
    border: 2px solid;
    ${getColor({ $color: 'main', $borderColor: 'main' })}
  `,

  primary: css`
    ${getColor({ $bgColor: 'main' })}

    ${mediaHover(css`
      ${getColor({ $bgColor: 'main2' })}
    `)}
  `,
};

const getVariant = (variant: Variant = 'primary') => variants[variant];

const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;

  padding: 0;

  cursor: pointer;
  color: inherit;
  background-color: transparent;
  border: none;

  ${({ variant }) =>
    variant &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: 4rem;
      min-width: 8rem;
      padding: 0 ${({ theme }) => theme.spacing.s};

      font-size: ${({ theme }) => theme.fontSizes.base};
      line-height: 1;

      color: ${({ theme }) => theme.color.textOnBg};
      border-radius: ${({ theme }) => theme.radiss[2]};
      box-shadow: ${({ theme }) => theme.shadow.default};

      transition: background-color 0.2s;

      ${getVariant(variant)}
    `}
`;

const ButtonLabel = styled.span`
  display: inline-flex;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonIcon = styled.span`
  display: inline-flex;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }

  &:not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xs};
  }
`;

export { Button, ButtonLabel, ButtonIcon };
