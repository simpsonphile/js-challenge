import { DefaultTheme, ThemedStyledProps } from 'styled-components';

export type ExtendedPartialThemedStyledProps<T> = Partial<
  ThemedStyledProps<T, DefaultTheme>
>;
