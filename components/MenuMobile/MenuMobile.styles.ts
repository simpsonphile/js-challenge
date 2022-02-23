import styled, { css } from 'styled-components';

import { getSpacing } from 'themes/mixins';
import { mediaMinWidth } from 'themes/mixins/mediaQueries';

export type StyledMenuMobileProps = {
  $isActive?: boolean;
};

const StyledMenuMobile = styled.div<StyledMenuMobileProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999;
  transform: translateX(100%);

  overflow: auto;

  height: 100vh;
  width: 100%;

  transition: transform 0.2s;
  will-change: contents;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: translateX(0);
    `}

  ${mediaMinWidth.s(css`
    width: 36rem;
  `)}
`;

const StyledMenuMobileTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${getSpacing({ $px: ['base', 'lg'] })}
  height: var(--header-height);

  background-color: ${({ theme }) => theme.color.bgAccent};
`;

const StyledMenuMobileContent = styled.div`
  background-color: ${({ theme }) => theme.color.bg};

  ${getSpacing({ $px: ['base', 'lg'], $pt: 'lg' })}
  min-height: calc(100% - var(--header-height) - 3.2rem);
`;

export { StyledMenuMobile, StyledMenuMobileTop, StyledMenuMobileContent };
