import { useState } from 'react';

import dynamic from 'next/dynamic';

import ClientOnly from 'components/ClientOnly';
import { IconHamburger } from 'components/IconHamburger';
import Inline from 'components/Inline';
import Logo from 'components/Logo';
import ModalInfoWithTrigger from 'components/ModalInfoWithTrigger';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { useAppMedia } from 'hooks/useAppMedia';

import { StyledHeader } from './Header.styles';

const MenuMobile = dynamic(
  () =>
    import('components/MenuMobile').then(
      (mod) => mod.MenuMobile as any
    ) as Promise<any>
);

export default function Header(): React.ReactElement {
  const [isMenuVisible, isMenuVisibleSet] = useState(false);
  const [isMenuRendered, isMenuRenderedSet] = useState(false);

  const isBellowMobile = !useAppMedia('lg', false);

  const toggleMenu = () => {
    isMenuRenderedSet(true);

    setTimeout(() => {
      isMenuVisibleSet(!isMenuVisible);
    }, 100);
  };

  return (
    <StyledHeader>
      <Logo />

      <Inline $g="s" $align="center">
        <ClientOnly>
          <ThemeSwitcher />
        </ClientOnly>

        <ModalInfoWithTrigger />

        <div>
          {isBellowMobile && (
            <IconHamburger isActive={isMenuVisible} onClick={toggleMenu} />
          )}
        </div>
      </Inline>

      {isMenuRendered && isBellowMobile && (
        <MenuMobile
          $isActive={isMenuVisible}
          onClose={() => isMenuVisibleSet(false)}
        />
      )}
    </StyledHeader>
  );
}
