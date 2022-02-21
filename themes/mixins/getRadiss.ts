import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $rad: 'border-radius',
};

const getRadiss = generateGetMixin(cssPropMap, 'radiss');

export type RadissProps = Parameters<typeof getRadiss>[0];

export { getRadiss };
