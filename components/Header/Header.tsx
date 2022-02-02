import Link from 'next/link';

import ClientOnly from 'components/ClientOnly';
import ThemeSwitcher from 'components/ThemeSwitcher';

export default function Header(): React.ReactElement {
  return (
    <header>
      <Link href="/">JSChallenge</Link>

      <ClientOnly>
        <ThemeSwitcher />
      </ClientOnly>
    </header>
  );
}
