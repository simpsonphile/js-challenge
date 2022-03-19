import styled, { css } from 'styled-components';

import { getFontSize } from 'themes/mixins';

export type StyledEditorProps = {
  $maxHeight?: string;
};

const StyledEditor = styled.div<StyledEditorProps>`
  ${getFontSize({ $fs: ['base', 'lg'] })};

  ${({ $maxHeight }) =>
    $maxHeight &&
    css`
      max-height: ${$maxHeight};
      overflow: auto;
    `}

  & .CodeMirror {
    min-height: 30rem;
    height: auto;
  }
`;

export { StyledEditor };
