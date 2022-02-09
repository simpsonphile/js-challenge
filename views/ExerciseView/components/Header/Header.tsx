import ClientOnly from 'components/ClientOnly';
import HeadlineHeader from 'components/HeadlineHeader';

type HeaderProps = {
  title: string;
  isPassed?: boolean;
};

export default function Header(props: HeaderProps): React.ReactElement {
  const { title, isPassed } = props;

  return (
    <HeadlineHeader
      headlineProps={{
        tag: 'h1',
        scale: 'xl2',
        children: (
          <>
            <ClientOnly>{isPassed && '✅ '}</ClientOnly>
            {title}
          </>
        ),
      }}
    />
  );
}
