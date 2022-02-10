import { useState } from 'react';

import { Items } from './types';

const useAccords = (items: Items, defaultActive?: string[]) => {
  const [activeAccords, activeAccordsSet] = useState(defaultActive || []);

  const hasKey = (key: string) => {
    return activeAccords.indexOf(key) !== -1;
  };

  const toggle = (key: string) => {
    const newActiveAccords: string[] = [];
    if (hasKey(key)) {
      const indexOfKeyToDelete = activeAccords.indexOf(key);
      const temp = [...activeAccords];
      temp.splice(indexOfKeyToDelete, 1);
      newActiveAccords.push(...temp);
    } else {
      newActiveAccords.push(key, ...activeAccords);
    }

    activeAccordsSet(newActiveAccords);
  };

  const accords = Object.entries(items).map(([key, val]) => ({
    title: val.title,
    toggle: () => toggle(key),
    isActive: hasKey(key),
    content: val.content,
  }));

  return { accords };
};

export default useAccords;
