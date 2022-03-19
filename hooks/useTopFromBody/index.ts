export const useTopFromBody = (el: HTMLDivElement | null) => {
  const isBrowser = typeof document === 'object';

  if (el && isBrowser) {
    return el.getBoundingClientRect().top;
  }

  return undefined;
};
