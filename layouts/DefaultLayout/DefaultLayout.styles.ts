import styled, { css, DefaultTheme } from 'styled-components';

type StyledDefaultLayoutProps = {
  hasSidebar?: boolean;
};

const SIDEBAR_WIDTH = '20rem';
const padding = ({ theme }: { theme: DefaultTheme }) => theme.spacing.lg;

const StyledDefaultLayout = styled.div<StyledDefaultLayoutProps>`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: ${padding};

  padding: 0 ${padding} ${padding} ${padding};

  ${({ hasSidebar }) =>
    hasSidebar
      ? css`
          grid-template-columns: ${SIDEBAR_WIDTH} auto;
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
`;

const StyledDefaultLayoutHeader = styled.div`
  grid-area: header;

  margin: 0 -${padding};
`;

const StyledDefaultLayoutSidebar = styled.aside`
  grid-area: sidebar;

  width: ${SIDEBAR_WIDTH};
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
