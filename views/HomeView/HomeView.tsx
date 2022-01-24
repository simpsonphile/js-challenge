import ExerciseList from 'components/ExerciseList';
import { Post } from 'lib/getExercises';

type HomeViewProps = { posts: Post[] };

export default function HomeView(props: HomeViewProps): React.ReactElement {
  const { posts } = props;

  return <ExerciseList posts={posts} />;
}
