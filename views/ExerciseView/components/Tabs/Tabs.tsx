import Editor from 'components/Editor';
import ExerciseEditor from 'components/ExerciseEditor';
import BaseTabs, { TabsProps as BaseTabsProps } from 'components/Tabs';

type TabsProps = {
  code?: string;
  tests?: string;
  hints?: string;
  solution?: string;
  isPassed?: boolean;
  onSuccess: () => void;
  toggleFullScreen: () => void;
};

export default function Tabs(props: TabsProps): React.ReactElement {
  const { code, tests, hints, solution, isPassed, onSuccess } = props;

  const tabItems: BaseTabsProps['items'] = {};

  if (code && tests) {
    tabItems.code = {
      content: (
        <div>
          {code && tests && (
            <div>
              <ExerciseEditor code={code} tests={tests} onSuccess={onSuccess} />
            </div>
          )}
        </div>
      ),
    };
  }

  if (hints) {
    tabItems.hints = {
      content: <div>{hints}</div>,
    };
  }

  if (isPassed && solution) {
    tabItems.solution = {
      content: <Editor value={solution} />,
    };
  }

  return <BaseTabs defaultActive="code" items={tabItems} />;
}
