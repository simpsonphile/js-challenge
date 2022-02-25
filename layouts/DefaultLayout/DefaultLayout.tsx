import dynamic from 'next/dynamic';

import Header from 'components/Header';
import { LayoutInner } from 'components/LayoutInner';
import { useAppMedia } from 'hooks/useAppMedia';

import {
  StyledDefaultLayout,
  StyledDefaultLayoutContent,
  StyledDefaultLayoutSidebar,
} from './DefaultLayout.styles';

const Sidebar = dynamic(import('components/Sidebar'));
const ButtonFABToggleFullScreen = dynamic(
  import('components/ButtonFABToggleFullScreen')
);

type DefaultLayoutProps = {
  children?: React.ReactChild;
  sidebar?: React.ReactChild;
  FAB?: React.ReactElement;
};

export default function DefaultLayout(
  props: DefaultLayoutProps
): React.ReactElement {
  const { children } = props;

  const isAboveMobile = useAppMedia('lg', false);

  return (
    <StyledDefaultLayout as={LayoutInner} hasSidebar={isAboveMobile}>
      <Header />

      {isAboveMobile && (
        <StyledDefaultLayoutSidebar>
          <Sidebar />
        </StyledDefaultLayoutSidebar>
      )}

      {children && (
        <StyledDefaultLayoutContent>{children}</StyledDefaultLayoutContent>
      )}

      {isAboveMobile && <ButtonFABToggleFullScreen />}

      <div id="footer" />
    </StyledDefaultLayout>
  );
}
