import ExerciseListWithSearch, {
  ExerciseListWithSearchProps,
} from 'components/ExerciseListWithSearch';

type SidebarProps = ExerciseListWithSearchProps;

export default function Sidebar(props: SidebarProps): React.ReactElement {
  const { posts } = props;

  return (
    <div>
      <ExerciseListWithSearch posts={posts} />
    </div>
  );
}
