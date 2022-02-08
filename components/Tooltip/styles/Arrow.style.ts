import { css } from 'styled-components';

import { Position } from './types';

export type ArrowProps = {
  size: string;
  color: string;
  position: Position;
};

const arrowPosition = (position: Position, color = 'black', size: string) => {
  if (position === 'bottom')
    return css`
      top: -${size};
      left: 50%;

      border-left: ${size} solid transparent;
      border-right: ${size} solid transparent;
      border-bottom: ${size} solid ${color};

      transform: translateX(-50%);
    `;
  if (position === 'left')
    return css`
      top: 50%;
      right: -${size};

      border-top: ${size} solid transparent;
      border-bottom: ${size} solid transparent;
      border-left: ${size} solid ${color};

      transform: translateY(-50%);
    `;
  if (position === 'top')
    return css`
      bottom: -${size};
      left: 50%;

      border-left: ${size} solid transparent;
      border-right: ${size} solid transparent;
      border-top: ${size} solid ${color};

      transform: translateX(-50%);
    `;
  if (position === 'right')
    return css`
      top: 50%;
      left: -${size};

      border-top: ${size} solid transparent;
      border-bottom: ${size} solid transparent;
      border-right: ${size} solid ${color};

      transform: translateY(-50%);
    `;
};

const Arrow = ({ size, color, position }: ArrowProps) => css`
  content: '';

  position: absolute;

  display: block;

  ${arrowPosition(position, color, size)}
`;

export { Arrow };
