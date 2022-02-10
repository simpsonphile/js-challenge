import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import globule from 'globule';

export type Exercise = {
  id: string;
  fullSlug: string;
  slug: string;
  cat?: string | null;
  title?: string;
  hints?: string;
  solution?: string;
  code?: string;
  tests?: string;
};

type Fields = keyof Omit<Exercise, 'id' | 'fullSlug' | 'slug'>;

const exercisesDir = join(process.cwd(), '_exercises');

export function getExerciseSlugs() {
  return globule.find(exercisesDir + '/**/*.md');
}

export function getExerciseByShortSlug(slug: string, fields: Fields[] = []) {
  const longSlug = exercisesDir + '/' + slug + '.md';

  return getExerciseBySlug(longSlug, fields);
}

export function getExerciseBySlug(
  slug: string,
  fields: Fields[] = []
): Exercise {
  const slugNoExt = slug.replace(/\.md$/, '');
  const shortSlug = slugNoExt.replace(exercisesDir + '/', '');
  const [slugPart1, slugPart2] = shortSlug.split('/');
  const fileContents = fs.readFileSync(slug, 'utf8');

  const { data, content } = matter(fileContents);

  const items: Exercise = {
    id: data?.id,
    fullSlug: shortSlug,
    slug: slugPart2 || slugPart1,
    cat: fields.includes('cat') ? (slugPart2 ? slugPart1 : null) : undefined,
    tests: fields.includes('tests') ? content : undefined,
  };

  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllExercises(fields: Fields[] = []) {
  const slugs = getExerciseSlugs();

  const exercises = slugs.map((slug) => getExerciseBySlug(slug, fields));

  return exercises;
}
