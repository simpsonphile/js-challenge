import { GetStaticProps } from 'next';

import { getPostBySlug, getAllPosts } from 'lib/getExercises';
import ExerciseView from 'views/ExerciseView';

import { Post } from 'lib/getExercises';
import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';

type ExerciseProps = {
  posts: Post[];
  post: Post;
};

export default function Exercise({ post, posts }: ExerciseProps) {
  const { title, code, content, slug } = post;

  return (
    <DefaultLayout sidebar={<Sidebar posts={posts} />}>
      <ExerciseView
        title={title}
        code={code}
        content={content}
        slug={slug}
        posts={posts}
      />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postKeys = ['title', 'slug', 'code', 'description', 'content'];
  const posts = getAllPosts(postKeys);

  const slug = params?.slug as string;
  const post: { [key: string]: string } = getPostBySlug(slug, postKeys);

  return {
    props: {
      posts,
      post: {
        ...post,
      },
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
