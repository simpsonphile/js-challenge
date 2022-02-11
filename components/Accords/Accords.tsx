import { forwardRef, useImperativeHandle } from 'react';

import Accord from 'components/Accord';
import List from 'components/List';

import { Items } from './types';
import useAccords from './useAccords';

export type AccordsProps = {
  items: Items;
  defaultActive?: string[];
};

export type AccordsHandle = {
  turnOn: (key: string) => void;
};

const Accords = forwardRef<AccordsHandle, AccordsProps>((props, ref) => {
  const { items, defaultActive } = props;

  const { accords, turnOn } = useAccords(items, defaultActive);

  const accordElements = accords.map((accord) => (
    <Accord key={accord.title} {...accord} />
  ));

  useImperativeHandle(ref, () => ({ turnOn }));

  return <List gap="base">{accordElements}</List>;
});

Accords.displayName = 'Accords';

export default Accords;
