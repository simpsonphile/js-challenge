import Box, { BoxProps } from './Box';

export type BoxDefaultProps = Omit<BoxProps, '$bgColor' | '$p' | '$hasShadow'>;

function BoxDefault(props: BoxDefaultProps): React.ReactElement {
  return <Box $bgColor="bg2" $p="base" $hasShadow {...props} />;
}

export { BoxDefault };
