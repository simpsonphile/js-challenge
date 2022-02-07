import { StyledText } from './Text.styles';

type TextProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function Text(props: TextProps): React.ReactElement {
  const { children } = props;

  return <StyledText>{children}</StyledText>;
}
