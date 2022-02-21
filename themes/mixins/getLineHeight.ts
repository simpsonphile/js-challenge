import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $lh: 'line-height',
};

const getLineHeight = generateGetMixin(cssPropMap, 'lineHeights');

export type LineHeightProps = Parameters<typeof getLineHeight>[0];

export { getLineHeight };
