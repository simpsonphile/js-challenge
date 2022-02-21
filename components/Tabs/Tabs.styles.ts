import styled, { css, DefaultTheme } from 'styled-components';

import { mediaHover } from 'themes/mixins/mediaQueries';

type StyledTabsNavItemProps = {
  active?: boolean;
};

type StyledTabsItemProps = {
  active?: boolean;
};

const getMainColor = ({ theme }: { theme: DefaultTheme }) => theme.color.main;
const getGrayColor = ({ theme }: { theme: DefaultTheme }) => theme.color.gray;
const getTextColor = ({ theme }: { theme: DefaultTheme }) => theme.color.text;
const getBgAccentColor = ({ theme }: { theme: DefaultTheme }) =>
  theme.color.bgAccent;

const StyledTabs = styled.div``;

const StyledTabsNav = styled.div`
  display: flex;

  background-color: ${getBgAccentColor};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s};

    border-radius: ${({ theme }) => theme.radiss[1]};
    border: 1px solid ${getGrayColor};
  }
`;

const StyledTabsNavItem = styled.button<StyledTabsNavItemProps>`
  &&& {
    height: 4.8rem;
    padding: 0 ${({ theme }) => theme.spacing.base};
    margin: -1px 0;

    border-bottom: 1px solid ${getGrayColor};
    color: ${getTextColor};

    ${({ active }) =>
      active &&
      css`
        color: ${getMainColor};
        border-color: ${getMainColor};
      `}

    ${mediaHover(css`
      background-color: ${getMainColor};
      color: white;
    `)}
  }
`;

const StyledTabsItem = styled.div<StyledTabsItemProps>`
  ${({ active }) =>
    css`
      display: ${active ? 'block' : 'none'};
    `}
`;

export { StyledTabs, StyledTabsNav, StyledTabsNavItem, StyledTabsItem };
