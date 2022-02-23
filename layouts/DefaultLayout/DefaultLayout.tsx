import Header from 'components/Header';
import { useAppMedia } from 'hooks/useAppMedia';

import {
  StyledDefaultLayout,
  StyledDefaultLayoutContent,
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

  const isAboveMobile = useAppMedia('lg', false);

  return (
    <StyledDefaultLayout hasSidebar={!!sidebar && isAboveMobile}>
      <Header />

      {sidebar && isAboveMobile && (
        <StyledDefaultLayoutSidebar>{sidebar}</StyledDefaultLayoutSidebar>
      )}

      {children && (
        <StyledDefaultLayoutContent>{children}</StyledDefaultLayoutContent>
      )}

      {isAboveMobile && FAB}

      <div id="footer" />
    </StyledDefaultLayout>
  );
}
