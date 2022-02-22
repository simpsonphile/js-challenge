import { StyledKbd } from './Kbd.styles';

export type KbdProps = {
  children: React.ReactNode;
};

function Kbd(props: KbdProps): React.ReactElement {
  const { children } = props;

  return <StyledKbd>{children}</StyledKbd>;
}

export { Kbd };
