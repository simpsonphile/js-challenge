import styled from 'styled-components';

const SIDEBAR_WIDTH = '20rem';

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} calc(100% - ${SIDEBAR_WIDTH});
  grid-template-areas:
    'header  header'
    'sidebar content';
  gap: 2rem;

  width: 100%;
`;

const StyledDefaultLayoutHeader = styled.div`
  grid-area: header;
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
