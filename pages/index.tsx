import ExerciseList from 'components/ExerciseList';
import { getAllPosts, Post } from 'lib/getExercises';

type HomeProps = {
  posts: Post[];
};

export default function Home(props: HomeProps) {
  const { posts } = props;

  return <ExerciseList posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title']);

  return {
    props: {
      posts,
    },
  };
}
