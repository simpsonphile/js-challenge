import { DefaultTheme, StyledComponent } from 'styled-components';

import { StyledBox, StyledBoxProps } from './Box.styles';

export type BoxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  as?: StyledComponent<any, DefaultTheme, object, never>; //todo make type
} & StyledBoxProps;

export default function Box(props: BoxProps): React.ReactElement {
  const { ref, ...rest } = props;

  return <StyledBox {...rest} />;
}
