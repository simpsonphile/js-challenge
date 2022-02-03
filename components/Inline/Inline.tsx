import { ReactElement } from 'react';

import { StyledInline, StyledInlineProps } from './Inline.styles';

type InlineProps = {
  children: ReactElement[];
} & StyledInlineProps;

export default function Inline(props: InlineProps): React.ReactElement {
  const { children, ...rest } = props;

  return <StyledInline {...rest}>{children}</StyledInline>;
}
