import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $fs: 'font-size',
};

const getFontSize = generateGetMixin(cssPropMap, 'fontSizes');

export type FontSizeProps = Parameters<typeof getFontSize>[0];

export { getFontSize };
