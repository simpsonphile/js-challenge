import { useState } from 'react';

import dynamic from 'next/dynamic';

import { IconHamburger } from 'components/IconHamburger';
import Inline from 'components/Inline';
import { LayoutInner } from 'components/LayoutInner';
import Logo from 'components/Logo';
import { MenuMobileProps } from 'components/MenuMobile';
import ModalInfoWithTrigger from 'components/ModalInfoWithTrigger';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { useAppMedia } from 'hooks/useAppMedia';

import { StyledHeader, StyledHeaderInner } from './Header.styles';

const MenuMobile = dynamic<MenuMobileProps>(() =>
  import('components/MenuMobile').then((mod) => mod.MenuMobile)
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
      <StyledHeaderInner as={LayoutInner}>
        <Logo />

        <Inline $g="s" $align="center">
          <ThemeSwitcher />

          <ModalInfoWithTrigger />

          <div>
            {isBellowMobile && (
              <IconHamburger isActive={isMenuVisible} onClick={toggleMenu} />
            )}
          </div>
        </Inline>

        {isMenuRendered && isBellowMobile && (
          <MenuMobile
            isActive={isMenuVisible}
            onClose={() => isMenuVisibleSet(false)}
          />
        )}
      </StyledHeaderInner>
    </StyledHeader>
  );
}
