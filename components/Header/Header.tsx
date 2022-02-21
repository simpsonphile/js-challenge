import ClientOnly from 'components/ClientOnly';
import Inline from 'components/Inline';
import Logo from 'components/Logo';
import ModalInfoWithTrigger from 'components/ModalInfoWithTrigger';
import ThemeSwitcher from 'components/ThemeSwitcher';

import { StyledHeader } from './Header.styles';

export default function Header(): React.ReactElement {
  return (
    <StyledHeader>
      <Logo />

      <Inline $g="base">
        <ClientOnly>
          <ThemeSwitcher />
        </ClientOnly>

        <ModalInfoWithTrigger />
      </Inline>
    </StyledHeader>
  );
}
