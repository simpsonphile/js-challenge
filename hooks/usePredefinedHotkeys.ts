import { useHotkeys } from 'react-hotkeys-hook';

type Callback = Parameters<typeof useHotkeys>[1];
type Options = Parameters<typeof useHotkeys>[2];
type Deps = Parameters<typeof useHotkeys>[3];

const combinations = {
  search: 'command + k',
  switchTheme: 'command + option + s',
  fullScreen: 'command + option + e',
  testExercise: 'command + option + t',
  closeCurrent: 'esc',
  nextExercise: 'command + option + enter',
  prevExercise: 'command + option + backspace,',
} as const;

type Params = {
  keys: keyof typeof combinations;
  callback: Callback;
  options?: Options;
};

export const usePredefinedHotkeys = (
  { keys, callback, options }: Params,
  deps?: Deps
) => useHotkeys(combinations[keys], callback, options, deps);
