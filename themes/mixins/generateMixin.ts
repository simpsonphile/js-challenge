import { css, DefaultTheme } from 'styled-components';

import { breakpointArrMapper } from './breakpointArrMapper';
import { breakpointMapper, BreakpointRecord } from './breakpointMapper';

type DefaultThemeKey = keyof DefaultTheme;

type DefaultThemeKeyValue<K extends DefaultThemeKey & string> =
  keyof DefaultTheme[K];

type CssProp = string | string[];

type CssPropMap = Record<string, CssProp>;

function createCssSetter<
  TK extends keyof DefaultTheme,
  TKV extends DefaultThemeKeyValue<TK>
>(cssProp: CssProp, themeKey: TK) {
  const cssProps = (Array.isArray(cssProp) ? cssProp : [cssProp]) as string[];

  return (themeKeyValue: TKV) =>
    css`
      ${({ theme }) =>
        themeKeyValue &&
        typeof theme[themeKey][themeKeyValue] === 'string' &&
        cssProps.map(
          (prop) => css`
            ${prop}: ${theme[themeKey][themeKeyValue] as unknown as string};
          `
        )}
    `;
}

export function generateGetMixin<
  T extends CssPropMap & Record<string, unknown>,
  TK extends DefaultThemeKey & string
>(cssPropMap: T, themeKey: TK) {
  return function getMixin(
    props: Partial<
      Record<
        keyof T,
        | DefaultThemeKeyValue<TK>
        | DefaultThemeKeyValue<TK>[]
        | BreakpointRecord<DefaultThemeKeyValue<TK>>
      >
    >
  ) {
    const keys = Object.keys(props);
    return keys.map((key: keyof T) => {
      if (!(key in cssPropMap)) return;

      const cssProp = cssPropMap[key];

      const setCss = createCssSetter(cssProp, themeKey);

      const value = props[key];

      if (typeof value === 'string' || typeof value === 'number') {
        return setCss(value as DefaultThemeKeyValue<typeof themeKey>);
      } else if (Array.isArray(value)) {
        //todo name
        return breakpointArrMapper(
          value as DefaultThemeKeyValue<typeof themeKey>[],
          setCss
        );
      }

      //todo name
      return breakpointMapper(
        (value as BreakpointRecord<DefaultThemeKeyValue<typeof themeKey>>) ||
          {},
        setCss
      );
    });
  };
}
