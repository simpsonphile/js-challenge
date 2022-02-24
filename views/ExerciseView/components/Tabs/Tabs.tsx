import { useContext } from 'react';

import ExerciseEditor from 'components/ExerciseEditor';
import BaseTabs, { TabsProps as BaseTabsProps } from 'components/Tabs';
import { ExerciseContext } from 'contexts/exercises';
import routes from 'lib/routes';

type TabsProps = {
  id: string;
  onSuccess: () => void;
};

export default function Tabs(props: TabsProps): React.ReactElement {
  const { id, onSuccess } = props;

  const tabItems: BaseTabsProps['items'] = {};

  const { getExerciseById } = useContext(ExerciseContext);
  const exercise = getExerciseById(id);
  const hints = exercise?.hints;
  const slug = exercise?.fullSlug;
  const url = slug ? routes.editExerciseOnGithub(slug) : undefined;

  if (id) {
    tabItems.code = {
      content: (
        <div>
          <div>
            <ExerciseEditor id={id} onSuccess={onSuccess} />
          </div>
        </div>
      ),
    };
  }

  if (hints) {
    tabItems.hints = {
      content: <div>{hints}</div>,
    };
  }

  if (url) {
    tabItems.edit = {
      asLink: true,
      href: url,
    };
  }

  return <BaseTabs defaultActive="code" items={tabItems} />;
}
