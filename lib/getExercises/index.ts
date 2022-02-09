import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import exerciseSlugsInOrder from './order';

export type Exercise = {
  title?: string;
  slug?: string;
  hints?: string;
  solution?: string;
  code?: string;
  tests?: string;
};

const exercisesDir = join(process.cwd(), '_exercises');

export function getExerciseSlugs() {
  return fs.readdirSync(exercisesDir);
}

export function getExerciseBySlug(
  slug: string,
  fields: string[] = []
): Exercise {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(exercisesDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
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
    slug: realSlug,
  };
}

export function getAllExercises(fields: string[] = []) {
  const slugs = getExerciseSlugs();
  const exercises = slugs
    .map((slug) => getExerciseBySlug(slug, fields))
    .sort((a, b) => {
      if (!a?.slug && !b?.slug) return 0;
      if (!a?.slug) return 1;
      if (!b?.slug) return -1;
      return (
        exerciseSlugsInOrder.indexOf(a.slug) -
        exerciseSlugsInOrder.indexOf(b.slug)
      );
    });

  return exercises;
}
