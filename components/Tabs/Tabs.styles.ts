import styled, { css, DefaultTheme } from 'styled-components';

import { getSpacing } from 'themes/mixins';

type StyledTabsNavItemProps = {
  active?: boolean;
};

type StyledTabsItemProps = {
  isActive?: boolean;
};

const StyledTabs = styled.div`
  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: ${({ theme }) => theme.radiss[2]};
`;

const StyledTabsNav = styled.div`
  display: flex;

  box-shadow: ${({ theme }) => theme.shadow.default};
  background-color: ${({ theme }) => theme.color.bg2};
`;

const StyledTabsNavItem = styled.button<StyledTabsNavItemProps>`
  &&& {
    height: 4.8rem;
    padding: 0 ${({ theme }) => theme.spacing.base};

    border-bottom: 2px solid transparent;

    ${({ active }) =>
      active &&
      css`
        color: ${({ theme }) => theme.color.main};
        border-bottom: 2px solid ${({ theme }) => theme.color.main};
      `}
  }
`;

const StyledTabsItem = styled.div<StyledTabsItemProps>`
  ${getSpacing({ $p: 'base' })}

  background-color: ${({ theme }) => theme.color.bg0};

  ${({ isActive }) =>
    css`
      display: ${isActive ? 'block' : 'none'};
    `}
`;

export { StyledTabs, StyledTabsNav, StyledTabsNavItem, StyledTabsItem };
