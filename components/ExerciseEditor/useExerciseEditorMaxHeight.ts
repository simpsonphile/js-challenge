import { MutableRefObject, RefObject } from 'react';

import { useAppMedia } from 'hooks/useAppMedia';
import { useTopFromBody } from 'hooks/useTopFromBody';

export const useExerciseEditorMaxHeight = (
  editorRef: RefObject<HTMLDivElement>
) => {
  const isAboveMd = useAppMedia('md');

  const top = useTopFromBody(
    (editorRef as MutableRefObject<HTMLDivElement>).current
  );

  // todo: get rid of magic numbers
  const getMaxHeight = () => {
    if (isAboveMd) {
      return `calc(100vh - ${top}px - 10.4rem)`;
    }

    return `calc(100vh - ${top}px - 15.2rem)`;
  };

  return getMaxHeight();
};
