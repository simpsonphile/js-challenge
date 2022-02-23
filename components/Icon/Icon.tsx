import { IconBaseProps } from 'react-icons';
import {
  AiOutlineFullscreen,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineQuestion,
} from 'react-icons/ai';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';

const iconMap = {
  AiOutlineFullscreen,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineQuestion,
  WiDaySunny,
  WiNightClear,
};

type IconName = keyof typeof iconMap;

export type IconProps = {
  name: IconName;
} & IconBaseProps;

function Icon(props: IconProps): React.ReactElement {
  const { name, ...rest } = props;

  const Tag = iconMap[name];

  return <Tag {...rest} />;
}

export { Icon };
