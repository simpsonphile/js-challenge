import ClientOnly from 'components/ClientOnly';
import ThemeSwitcher from 'components/ThemeSwitcher';
import Logo from 'components/Logo';

import { StyledHeader } from './Header.styles';

export default function Header(): React.ReactElement {
  return (
    <StyledHeader>
      <Logo />

      <ClientOnly>
        <ThemeSwitcher />
      </ClientOnly>
    </StyledHeader>
  );
}
