import { useRouter } from 'next/router';

import { Post } from 'lib/getExercises';

const useGoToNextExercise = (posts: Post[], slug?: string) => {
  const router = useRouter();

  if (!slug) return;

  const index = posts.findIndex((post) => post.slug === slug);

  const nextSlug = posts?.[index + 1]?.slug;

  if (nextSlug) {
    return () => router.push('/exercises/' + nextSlug);
  }
};

export default useGoToNextExercise;
