import Link from 'next/link';

import ClientOnly from 'components/ClientOnly';
import ThemeSwitcher from 'components/ThemeSwitcher';

import { StyledHeader } from './Header.styles';

export default function Header(): React.ReactElement {
  return (
    <StyledHeader>
      <Link href="/">JSChallenge</Link>

      <ClientOnly>
        <ThemeSwitcher />
      </ClientOnly>
    </StyledHeader>
  );
}
