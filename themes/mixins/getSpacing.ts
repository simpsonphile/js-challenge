import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $p: 'padding',
  $pt: 'padding-top',
  $pr: 'padding-right',
  $pb: 'padding-bottom',
  $pl: 'padding-left',
  $m: 'margin',
  $mt: 'margin-top',
  $mr: 'margin-right',
  $mb: 'margin-bottom',
  $ml: 'margin-left',
} as const;

const getSpacing = generateGetMixin(cssPropMap, 'spacing');

export type SpacingProps = Parameters<typeof getSpacing>[0];

export { getSpacing };
