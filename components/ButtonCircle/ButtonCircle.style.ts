import styled, { css } from 'styled-components';

import { mediaHover } from 'themes/mixins/mediaQueries';

const StyledButtonCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.4rem;
  width: 2.4rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};

  transition: background-color 0.2s;

  ${mediaHover(css`
    background-color: ${({ theme }) => theme.color.mainHover};
  `)}
`;

export { StyledButtonCircle };
