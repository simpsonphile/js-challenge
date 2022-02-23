import NextHead from 'next/head';

export type HeadProps = {
  title: string;
  description: string;
};

function Head(props: HeadProps): React.ReactElement {
  const { title, description } = props;

  const titleComputed = `${title} - JSChallenge`;

  return (
    <NextHead>
      <title>{titleComputed}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={titleComputed} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
    </NextHead>
  );
}

export { Head };
