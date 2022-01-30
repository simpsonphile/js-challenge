import { useRouter } from 'next/router';

import { Post } from 'lib/getExercises';
import { getExerciseStatuses } from 'lib/updateData';
import shuffle from 'lodash/shuffle';

const useGoToNextExercise = (posts: Post[], slug?: string) => {
  const router = useRouter();

  if (!slug) return;

  const statuses = getExerciseStatuses();

  const postsWithStatus = posts.map((post) => ({
    ...post,
    isPassed: post.slug ? !!statuses?.[post.slug] : false,
  }));

  const shuffledPostsWithStatus = shuffle(postsWithStatus);

  const nextPost = shuffledPostsWithStatus.find((post) => !post.isPassed);
  const nextSlug = nextPost?.slug;

  console.log(postsWithStatus, !!statuses?.['e4']);

  if (nextSlug) {
    return () => router.push('/exercises/' + nextSlug);
  }
};

export default useGoToNextExercise;
