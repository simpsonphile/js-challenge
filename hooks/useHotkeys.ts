import hotkeys from 'hotkeys-js';

const useHotkeys = (str: string, callback: () => void) => {
  const isBrowser = typeof window === 'object';

  if (isBrowser) {
    hotkeys(str, callback);
  }
};

export { useHotkeys };
