import { useCallback, useState } from 'react';

import ExerciseEditor from 'components/ExerciseEditor';
import ModalExerciseCompleted from 'components/ModalExerciseCompleted';
import Headline from 'components/Headline';
import ClientOnly from 'components/ClientOnly';
import updateLocalStorageExercisesData, {
  checkExerciseStatus,
} from 'lib/updateData';
import { Post } from 'lib/getExercises';

type ExerciseViewProps = Post & { posts: Post[] };

export default function ExerciseLayout(
  props: ExerciseViewProps
): React.ReactElement {
  const { title, code, description, content, slug, posts } = props;

  const [showModal, showModalSet] = useState(false);

  const isPassed = slug ? checkExerciseStatus(slug) : false;

  const makeExerciseCompleted = useCallback(() => {
    if (slug) {
      updateLocalStorageExercisesData(slug, true);
    }
  }, [slug]);

  const onSuccess = () => {
    makeExerciseCompleted();
    showModalSet(true);
  };

  return (
    <div>
      {title && (
        <header>
          <Headline tag="h1">
            {title}
            <ClientOnly>{isPassed && ' ✅'}</ClientOnly>
          </Headline>

          {description && <div>{description}</div>}
        </header>
      )}

      {code && content && (
        <div>
          <ExerciseEditor code={code} tests={content} onSuccess={onSuccess} />
        </div>
      )}

      {slug && showModal && (
        <ModalExerciseCompleted
          posts={posts}
          slug={slug}
          onClose={() => showModalSet(false)}
        />
      )}
    </div>
  );
}
