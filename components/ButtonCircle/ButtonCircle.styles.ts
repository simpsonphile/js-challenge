import styled, { css } from 'styled-components';

import { mediaHover } from 'themes/mixins/mediaQueries';

export type StyledButtonCircleProps = {
  size?: 'xs' | 's';
};

const getSize = (size?: StyledButtonCircleProps['size']) => {
  const sizeVal = size === 's' ? '4.8rem' : '2.4rem';

  return css`
    height: ${sizeVal};
    width: ${sizeVal};
  `;
};

const StyledButtonCircle = styled.div<StyledButtonCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.4rem;
  width: 2.4rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};

  transition: background-color 0.2s;

  ${({ size }) => getSize(size)}

  ${mediaHover(css`
    background-color: ${({ theme }) => theme.color.mainHover};
  `)}
`;

export { StyledButtonCircle };
