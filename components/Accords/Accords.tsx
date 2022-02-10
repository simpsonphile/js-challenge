import Accord from 'components/Accord';
import List from 'components/List';

import { Items } from './types';
import useAccords from './useAccords';

type AccordsProps = {
  items: Items;
  defaultActive?: string[];
};

export default function Accords(props: AccordsProps): React.ReactElement {
  const { items, defaultActive } = props;

  const { accords } = useAccords(items, defaultActive);

  const accordElements = accords.map((accord) => (
    <Accord key={accord.title} {...accord} />
  ));

  return <List gap="base">{accordElements}</List>;
}
