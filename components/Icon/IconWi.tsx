import { IconBaseProps } from 'react-icons';
import * as WI from 'react-icons/wi';

type IconName = keyof typeof WI;

export type IconProps = {
  name: IconName;
} & IconBaseProps;

function IconWi(props: IconProps): React.ReactElement {
  const { name, ...rest } = props;

  const Tag = WI[name];

  return <Tag {...rest} />;
}

export { IconWi };
