import remarkHtml from 'remark-html';
import { read } from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read(markdown));
  return result.toString();
}
