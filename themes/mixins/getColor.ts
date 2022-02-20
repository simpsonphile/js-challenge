import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $color: 'color',
  $bgColor: 'background-color',
  $borderColor: 'border-color',
} as const;

const getColor = generateGetMixin(cssPropMap, 'color');

export type ColorProps = Parameters<typeof getColor>[0];

export { getColor };
