import styled, { css } from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins';

import { Arrow } from './Arrow.styles';
import { Position } from './types';

export type StyledTooltipProps = {
  position?: Position;
  top?: number;
  left?: number;
  isVisible?: boolean;
} & ColorProps;

const StyledTooltip = styled.div`
  display: inline;
`;

const setMessagePosition = ({ position }: { position?: Position }) => {
  if (position === 'right')
    return css`
      transform: translate(50%, -50%);
    `;

  if (position === 'bottom')
    return css`
      transform: translate(-50%, 10px);
    `;

  if (position === 'left')
    return css`
      transform: translate(calc(-100% - 10px), -50%);
    `;

  return css`
    transform: translate(-50%, calc(-100% - 10px));
  `;
};

const StyledTooltipMessage = styled.div.attrs<StyledTooltipProps>(
  ({ top, left, isVisible }) => ({
    style: {
      top: top ? top + 'px' : 0,
      left: left ? left + 'px' : 0,
      visibility: isVisible ? 'visible' : 'hidden',
    },
  })
)<StyledTooltipProps>`
  ${getColor};

  position: fixed;
  z-index: 999999;

  pointer-events: none;

  padding: ${({ theme }) => theme.spacing.s};

  border-radius: ${({ theme }) => theme.radiss[1]};
  box-shadow: ${({ theme }) => theme.shadow.default};

  ${setMessagePosition};

  &:after {
    ${({ position }) =>
      Arrow({
        size: '0.6rem',
        color: 'black',
        position: position || 'top',
      })}
  }
`;

export { StyledTooltip, StyledTooltipMessage };
