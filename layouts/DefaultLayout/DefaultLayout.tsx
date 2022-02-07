import ClientOnly from 'components/ClientOnly';
import Header from 'components/Header';

import {
  StyledDefaultLayout,
  StyledDefaultLayoutContent,
  StyledDefaultLayoutHeader,
  StyledDefaultLayoutSidebar,
} from './DefaultLayout.style';

type DefaultLayoutProps = {
  children: React.ReactChild;
  sidebar?: React.ReactChild;
};

export default function DefaultLayout(
  props: DefaultLayoutProps
): React.ReactElement {
  const { children, sidebar } = props;

  return (
    <StyledDefaultLayout>
      <ClientOnly>
        <StyledDefaultLayoutHeader>
          <Header />
        </StyledDefaultLayoutHeader>
      </ClientOnly>

      <StyledDefaultLayoutSidebar>{sidebar}</StyledDefaultLayoutSidebar>

      <StyledDefaultLayoutContent>{children}</StyledDefaultLayoutContent>

      <div id="footer" />
    </StyledDefaultLayout>
  );
}
