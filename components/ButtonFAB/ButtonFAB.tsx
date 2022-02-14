import ButtonCircle, {
  ButtonCircleProps,
} from 'components/ButtonCircle/ButtonCircle';

import { StyledButtonFAB } from './ButtonFAB.styles';

type ButtonFABProps = ButtonCircleProps;

export default function ButtonFAB(props: ButtonFABProps): React.ReactElement {
  const { children } = props;

  return (
    <StyledButtonFAB>
      <ButtonCircle>{children}</ButtonCircle>
    </StyledButtonFAB>
  );
}
