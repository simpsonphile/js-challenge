import { useMedia } from 'react-use';

export const useDetectColorScheme = () => {
  const isDark = useMedia('(prefers-color-scheme: dark)', true);

  return isDark ? 'dark' : 'light';
};
