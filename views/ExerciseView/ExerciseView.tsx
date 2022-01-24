import { useCallback } from 'react';
import ExerciseEditor from 'components/ExerciseEditor';
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

  console.log(posts);

  const isPassed = slug ? checkExerciseStatus(slug) : false;

  // const goToNextExercise = useCallback(() => {}, []);

  const makeExerciseCompleted = useCallback(() => {
    if (slug) {
      updateLocalStorageExercisesData(slug, true);
    }
  }, [slug]);

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
          <ExerciseEditor
            code={code}
            tests={content}
            onSuccess={!isPassed ? makeExerciseCompleted : undefined}
          />
        </div>
      )}
    </div>
  );
}
