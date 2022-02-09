import { StyledBox, StyledBoxProps } from './Box.styles';

type BoxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  StyledBoxProps;

export default function Box(props: BoxProps): React.ReactElement {
  const { ref, ...rest } = props;

  return <StyledBox {...rest} />;
}
