import { useRef } from 'react';

import { useClickAway, useLockBodyScroll } from 'react-use';

import ExerciseListWithSearch from 'components/ExerciseListWithSearch';
import { IconHamburger } from 'components/IconHamburger';
import { Shadow } from 'components/Shadow';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

import {
  StyledMenuMobile,
  StyledMenuMobileTop,
  StyledMenuMobileContent,
  StyledMenuMobileProps,
} from './MenuMobile.styles';

export type MenuMobileProps = {
  onClose: () => void;
} & StyledMenuMobileProps;

function MenuMobile(props: MenuMobileProps): React.ReactElement {
  const { isActive, onClose } = props;

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  useClickAway(ref, onClose);

  useLockBodyScroll(isActive);

  usePredefinedHotkeys({
    keys: 'closeCurrent',
    callback: onClose,
  });

  return (
    <>
      {isActive && <Shadow />}
      <StyledMenuMobile ref={ref} data-testid="menuMobile" isActive={isActive}>
        <StyledMenuMobileTop>
          <IconHamburger isActive={isActive} onClick={onClose} />
        </StyledMenuMobileTop>
        <StyledMenuMobileContent>
          <ExerciseListWithSearch onLinkClick={onClose} />
        </StyledMenuMobileContent>
      </StyledMenuMobile>
    </>
  );
}

export { MenuMobile };
