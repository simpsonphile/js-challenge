import * as CSS from 'csstype';
import { css, DefaultTheme } from 'styled-components';

import { breakpointArrMapper } from './breakpointArrMapper';
import { breakpointMapper, BreakpointRecord } from './breakpointMapper';

type DefaultThemeKey = keyof DefaultTheme;

type DefaultThemeKeyValue<K extends DefaultThemeKey & string> =
  keyof DefaultTheme[K];

type CssPropMap = Record<string, keyof CSS.PropertiesHyphen>;

function mixin<
  TK extends keyof DefaultTheme,
  TKV extends DefaultThemeKeyValue<TK>
>(cssProp: keyof CSS.PropertiesHyphen, themeKey: TK) {
  return (themeKeyValue: TKV) =>
    css`
      ${({ theme }) =>
        themeKeyValue &&
        typeof theme[themeKey][themeKeyValue] === 'string' &&
        css`
          ${cssProp}: ${theme[themeKey][themeKeyValue] as unknown as string};
        `}
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

      const mixinFunc = mixin(cssProp, themeKey);

      const value = props[key];

      if (typeof value === 'string') {
        return mixinFunc(value as DefaultThemeKeyValue<typeof themeKey>);
      } else if (Array.isArray(value)) {
        //todo name
        return breakpointArrMapper(
          value as DefaultThemeKeyValue<typeof themeKey>[],
          mixinFunc
        );
      }

      //todo name
      return breakpointMapper(
        (value as BreakpointRecord<DefaultThemeKeyValue<typeof themeKey>>) ||
          {},
        mixinFunc
      );
    });
  };
}
