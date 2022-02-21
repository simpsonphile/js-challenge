import { generateGetMixin } from './generateMixin';

const cssPropMap = {
  $p: 'padding',
  $pt: 'padding-top',
  $pr: 'padding-right',
  $pb: 'padding-bottom',
  $pl: 'padding-left',
  $py: ['padding-top', 'padding-bottom'],
  $px: ['padding-right', 'padding-left'],
  $m: 'margin',
  $mt: 'margin-top',
  $mr: 'margin-right',
  $mb: 'margin-bottom',
  $ml: 'margin-left',
  $my: ['margin-top', 'margin-bottom'],
  $mx: ['margin-right', 'margin-left'],
  $g: 'gap',
  $gr: 'gap-row',
  $gc: 'gap-column',
};

const getSpacing = generateGetMixin(cssPropMap, 'spacing');

export type SpacingProps = Parameters<typeof getSpacing>[0];

export { getSpacing };
