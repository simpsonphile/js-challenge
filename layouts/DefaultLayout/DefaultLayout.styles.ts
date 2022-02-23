import styled, { css } from 'styled-components';

import { getSpacing } from 'themes/mixins';
import { mediaMinWidth } from 'themes/mixins/mediaQueries';

type StyledDefaultLayoutProps = {
  hasSidebar?: boolean;
};

const StyledDefaultLayout = styled.div<StyledDefaultLayoutProps>`
  --sidebar-width: 20rem;

  display: grid;
  grid-template-rows: min-content 1fr;

  margin-top: var(--header-height);

  ${getSpacing({ $pb: 'lg', $g: ['base', 'lg'] })}

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

  ${mediaMinWidth.xl(css`
    --sidebar-width: 28rem;
  `)}
`;

const StyledDefaultLayoutSidebar = styled.nav`
  grid-area: sidebar;

  width: var(--sidebar-width);
`;

const StyledDefaultLayoutContent = styled.main`
  grid-area: content;

  min-width: 0;
`;

export {
  StyledDefaultLayout,
  StyledDefaultLayoutSidebar,
  StyledDefaultLayoutContent,
};
