import { css } from 'styled-components';

const fontScales = {
  xs: ['1rem', '1.6rem'],
  s: ['1.2rem', '1.8rem'],
  base: ['1.6rem', '2.4rem'],
  lg: ['2rem', '3rem'],
  xl: ['2.4rem', '3.6rem'],
  xl2: ['3.2rem', '4.8rem'],
  xl3: ['4rem', '6rem'],
  xl4: ['4.8rem', '7.2rem'],
} as const;

export type FontScaleName = keyof typeof fontScales;

const getFontScale = (scale: FontScaleName) => css`
  font-size: ${fontScales[scale][0]};
  line-height: ${fontScales[scale][1]};
`;

export default getFontScale;
