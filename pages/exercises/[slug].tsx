import { GetStaticProps } from 'next';

import { getPostBySlug, getAllPosts } from 'lib/getExercises';
import ExerciseView from 'views/ExerciseView';

import { Post } from 'lib/getExercises';
import DefaultLayout from 'layouts/DefaultLayout';

type ExerciseProps = {
  posts: Post[];
  post: Post;
};

export default function Exercise({ post, posts }: ExerciseProps) {
  const { title, code, description, content, slug } = post;

  return (
    <DefaultLayout>
      <ExerciseView
        title={title}
        code={code}
        description={description}
        content={content}
        slug={slug}
        posts={posts}
      />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts(['slug']);

  const slug = params?.slug as string;
  const post: { [key: string]: string } = getPostBySlug(slug, [
    'title',
    'slug',
    'code',
    'description',
    'content',
  ]);

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
