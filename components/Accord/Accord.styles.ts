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

const StyledAccordIcon = styled.button<StyledAccordSharedProps>`
  &:after {
    content: attr(data-icon);
  }
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
