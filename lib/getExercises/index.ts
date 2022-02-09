import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import exerciseSlugsInOrder from './order';

export type Post = {
  title?: string;
  slug?: string;
  code?: string;
  content?: string;
};

const postsDirectory = join(process.cwd(), '_exercises');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
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
    content,
  };
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => {
      if (!a?.slug && !b?.slug) return 0;
      if (!a?.slug) return 1;
      if (!b?.slug) return -1;
      return (
        exerciseSlugsInOrder.indexOf(a.slug) -
        exerciseSlugsInOrder.indexOf(b.slug)
      );
    });

  return posts;
}
