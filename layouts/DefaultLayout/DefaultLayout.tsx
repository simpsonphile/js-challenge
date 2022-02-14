import ClientOnly from 'components/ClientOnly';
import Header from 'components/Header';

import {
  StyledDefaultLayout,
  StyledDefaultLayoutContent,
  StyledDefaultLayoutHeader,
  StyledDefaultLayoutSidebar,
} from './DefaultLayout.styles';

type DefaultLayoutProps = {
  children?: React.ReactChild;
  sidebar?: React.ReactChild;
  FAB?: React.ReactElement;
};

export default function DefaultLayout(
  props: DefaultLayoutProps
): React.ReactElement {
  const { children, sidebar, FAB } = props;

  return (
    <StyledDefaultLayout hasSidebar={!!sidebar}>
      <ClientOnly>
        <StyledDefaultLayoutHeader>
          <Header />
        </StyledDefaultLayoutHeader>
      </ClientOnly>

      {sidebar && (
        <StyledDefaultLayoutSidebar>{sidebar}</StyledDefaultLayoutSidebar>
      )}

      {children && (
        <StyledDefaultLayoutContent>{children}</StyledDefaultLayoutContent>
      )}

      {FAB}

      <div id="footer" />
    </StyledDefaultLayout>
  );
}
