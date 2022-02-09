import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import globule from 'globule';

export type Exercise = {
  fullSlug: string;
  slug: string;
  cat?: string | null;
  title?: string;
  hints?: string;
  solution?: string;
  code?: string;
  tests?: string;
};

type ExerciseKeys = keyof Exercise;

const exercisesDir = join(process.cwd(), '_exercises');

export function getExerciseSlugs() {
  return globule.find(exercisesDir + '/**/*.md');
}

export function getExerciseByShortSlug(
  slug: string,
  fields: ExerciseKeys[] = []
) {
  const longSlug = exercisesDir + '/' + slug + '.md';

  return getExerciseBySlug(longSlug, fields);
}

export function getExerciseBySlug(
  slug: string,
  fields: ExerciseKeys[] = []
): Exercise {
  const slugNoExt = slug.replace(/\.md$/, '');
  const shortSlug = slugNoExt.replace(exercisesDir + '/', '');
  const [slugPart1, slugPart2] = shortSlug.split('/');
  const fileContents = fs.readFileSync(slug, 'utf8');

  const { data, content } = matter(fileContents);

  const items: { [key: string]: string } = {};

  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return {
    ...items,
    tests: content,
    fullSlug: shortSlug,
    slug: slugPart2 || slugPart1,
    cat: slugPart2 ? slugPart1 : null,
  };
}

export function getAllExercises(fields: ExerciseKeys[] = []) {
  const slugs = getExerciseSlugs();

  const exercises = slugs.map((slug) => getExerciseBySlug(slug, fields));

  return exercises;
}
