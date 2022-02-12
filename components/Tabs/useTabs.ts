import { useState } from 'react';
import { useRouter } from 'next/router';

import { Items } from './types';

const useTabs = (items: Items, defaultActive?: string) => {
  const router = useRouter();

  const [activeTab, activeTabSet] = useState<string | null>(
    defaultActive || null
  );

  const navItems = Object.entries(items).map(([key, val]) => ({
    title: key,
    changeTab: !val.asLink ? () => activeTabSet(key) : undefined,
    goToLink: val.asLink ? () => router.push(val.href) : undefined,
    active: activeTab === key,
    asLink: val.asLink,
  }));

  const contentItems = Object.entries(items)
    .filter(([, val]) => !val?.asLink)
    .map(([key, val]) => ({
      id: key,
      content: val?.content,
      active: activeTab === key,
    }));

  return {
    navItems,
    contentItems,
  };
};

export default useTabs;
