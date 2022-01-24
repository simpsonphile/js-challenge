import { useCallback, useState } from 'react';

import ExerciseEditor from 'components/ExerciseEditor';
import ModalExerciseCompleted from 'components/ModalExerciseCompleted';
import updateLocalStorageExercisesData, {
  checkExerciseStatus,
} from 'lib/updateData';
import { Post } from 'lib/getExercises';

import styles from './index.module.scss';

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
    <div className={styles['exercise-view']}>
      {title && (
        <header className={styles['exercise-view__header']}>
          <h1>
            {title}
            {isPassed && '✅'}
          </h1>

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
