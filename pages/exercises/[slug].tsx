import { GetStaticProps } from 'next';

import { getPostBySlug, getAllPosts } from '../../lib/getData';
import ExerciseLayout from '../../layouts/ExerciseLayout';

type ExerciseProps = {
  post: {
    title: string;
    slug: string;
    code: string;
    description: string;
    content: string;
  };
};

export default function Exercise({ post }: ExerciseProps) {
  const { title, code, description, content } = post;

  return (
    <ExerciseLayout
      title={title}
      code={code}
      description={description}
      tests={content}
    />
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
