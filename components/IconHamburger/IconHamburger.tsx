import {
  StyledIconHamburger,
  StyledIconHamburgerLine,
} from './IconHamburger.styles';

export type IconHamburgerProps = {
  isActive?: boolean;
  onClick?: () => void;
};

function IconHamburger(props: IconHamburgerProps): React.ReactElement {
  const { isActive, onClick } = props;

  return (
    <StyledIconHamburger $isActive={isActive} onClick={onClick}>
      <StyledIconHamburgerLine />
      <StyledIconHamburgerLine />
      <StyledIconHamburgerLine />
    </StyledIconHamburger>
  );
}

export { IconHamburger };
