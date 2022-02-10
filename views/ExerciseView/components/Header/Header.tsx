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
    <Box mb="lg">
      <Headline tag="h1" scale="xl2">
        <ClientOnly>{isPassed && '✅ '}</ClientOnly>
        {title}
      </Headline>
    </Box>
  );
}
