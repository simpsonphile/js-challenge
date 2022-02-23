import styled, { css, DefaultTheme } from 'styled-components';

import { mediaMinWidth } from 'themes/mixins/mediaQueries';

type StyledDefaultLayoutProps = {
  hasSidebar?: boolean;
};

const padding = ({ theme }: { theme: DefaultTheme }) => theme.spacing.lg;

const StyledDefaultLayout = styled.div<StyledDefaultLayoutProps>`
  --sidebar-width: 20rem;

  display: grid;
  grid-template-rows: min-content 1fr;
  gap: ${padding};

  padding: 0 ${padding} ${padding} ${padding};

  ${({ hasSidebar }) =>
    hasSidebar
      ? css`
          grid-template-columns: var(--sidebar-width) auto;
          grid-template-areas:
            'header  header'
            'sidebar content';
        `
      : css`
          grid-template-columns: minmax(0, 1fr);
          grid-template-areas:
            'header'
            'content';
        `};

  ${mediaMinWidth.xl(css`
    --sidebar-width: 28rem;
  `)}
`;

const StyledDefaultLayoutHeader = styled.div`
  grid-area: header;

  margin: 0 -${padding};
`;

const StyledDefaultLayoutSidebar = styled.aside`
  grid-area: sidebar;

  width: var(--sidebar-width);
`;

const StyledDefaultLayoutContent = styled.main`
  grid-area: content;

  min-width: 0;
`;

export {
  StyledDefaultLayout,
  StyledDefaultLayoutHeader,
  StyledDefaultLayoutSidebar,
  StyledDefaultLayoutContent,
};
