import Link from 'components/Link';
import { Post } from 'lib/getExercises';

import style from './index.module.scss';

export type ExerciseListProps = {
  posts: Post[];
};

const SLUG_PREFIX = '/exercises/';

export default function ExerciseList(
  props: ExerciseListProps
): React.ReactElement {
  const { posts } = props;

  const links = posts.map((link) => (
    <li key={link.slug}>
      <Link href={SLUG_PREFIX + link.slug}>{link.title}</Link>
    </li>
  ));

  return <ul className={style['exercise-list']}>{links}</ul>;
}
