import ClientOnly from 'components/ClientOnly';
import Logo from 'components/Logo';
import ThemeSwitcher from 'components/ThemeSwitcher';

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
