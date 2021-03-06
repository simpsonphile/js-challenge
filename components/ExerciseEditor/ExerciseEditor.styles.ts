import styled, { css } from 'styled-components';

import { mediaMinWidth } from 'themes/mixins/mediaQueries';

const StyledExerciseEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;

  ${mediaMinWidth.md(css`
    grid-template-columns: 2fr 1fr;
  `)}

  & > * {
    min-width: 0;
  }
`;

const StyledExerciseEditorResults = styled.div`
  order: 2;

  ${mediaMinWidth.md(css`
    order: initial;
  `)}
`;

export { StyledExerciseEditor, StyledExerciseEditorResults };
