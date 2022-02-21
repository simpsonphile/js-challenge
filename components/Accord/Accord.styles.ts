import styled, { css } from 'styled-components';

import { mediaHover } from 'themes/mixins/mediaQueries';

export type StyledAccordSharedProps = {
  isActive?: boolean;
};

const StyledAccordHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  ${mediaHover(css`
    background-color: ${({ theme }) => theme.color.main2};
  `)}
`;

const StyledAccordIcon = styled.div<StyledAccordSharedProps>`
  transform: rotate(0);
  transform-origin: center;

  height: 1em;

  transition: transform 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;

const StyledAccordContent = styled.div<StyledAccordSharedProps>`
  overflow: hidden;

  max-height: 0;
  padding-top: 0;

  transition: max-height 0.2s, padding-top 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      padding-top: ${({ theme }) => theme.spacing.base};
      max-height: 1000px;
    `}
`;

export { StyledAccordHead, StyledAccordIcon, StyledAccordContent };
