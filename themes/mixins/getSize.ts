import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $w: 'width',
  $h: 'height',
};

const getSize = generateGetMixin(cssPropMap, 'sizing');

export type SizeProps = Parameters<typeof getSize>[0];

export { getSize };
