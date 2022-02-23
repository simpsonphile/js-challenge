import Box from 'components/Box';
import ClientOnly from 'components/ClientOnly';
import Headline from 'components/Headline';

type HeaderProps = {
  title: string;
  isPassed?: boolean;
};

export default function Header(props: HeaderProps): React.ReactElement {
  const { title, isPassed } = props;

  return (
    <Box $mb={['base', 'lg']}>
      <Headline tag="h1" $fs={['xl', 'xl2']}>
        <ClientOnly>
          <span>{isPassed && '✅ '}</span>
        </ClientOnly>
        {title}
      </Headline>
    </Box>
  );
}
