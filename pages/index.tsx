import Sidebar from 'components/Sidebar';
import DefaultLayout from 'layouts/DefaultLayout';
import { getAllPosts, Post } from 'lib/getExercises';
import HomeView from 'views/HomeView';

type HomeProps = {
  posts: Post[];
};

export default function Home(props: HomeProps) {
  const { posts } = props;

  return (
    <DefaultLayout sidebar={<Sidebar posts={posts} />}>
      <HomeView></HomeView>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title']);

  return {
    props: {
      posts,
    },
  };
}
