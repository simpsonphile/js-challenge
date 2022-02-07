import styled, { DefaultTheme } from 'styled-components';

const SIDEBAR_WIDTH = '20rem';
const padding = ({ theme }: { theme: DefaultTheme }) => theme.spacing.lg;

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} auto;
  grid-template-areas:
    'header  header'
    'sidebar content';
  gap: ${padding};

  padding: ${padding};
`;

const StyledDefaultLayoutHeader = styled.div`
  grid-area: header;

  margin: -${padding} -${padding} 0 -${padding};
`;

const StyledDefaultLayoutSidebar = styled.aside`
  grid-area: sidebar;

  width: ${SIDEBAR_WIDTH};
`;

const StyledDefaultLayoutContent = styled.main`
  grid-area: content;
`;

export {
  StyledDefaultLayout,
  StyledDefaultLayoutHeader,
  StyledDefaultLayoutSidebar,
  StyledDefaultLayoutContent,
};
