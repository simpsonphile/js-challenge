import { IconBaseProps } from 'react-icons';
import * as AI from 'react-icons/ai';

type IconName = keyof typeof AI;

export type IconProps = {
  name: IconName;
} & IconBaseProps;

function Icon(props: IconProps): React.ReactElement {
  const { name, ...rest } = props;

  const Tag = AI[name];

  return <Tag {...rest} />;
}

export { Icon };
