import { Exercise } from 'lib/getExercises';

const unique = (
  value: string | null | undefined,
  index: number,
  arr: (string | null | undefined)[]
) => {
  return arr.indexOf(value) === index;
};

const exerciseArrToCatObj = (
  exercises: Exercise[]
): Record<string, Exercise[]> => {
  const cats = exercises.map((exercise) => exercise.cat).filter(unique);

  const catsWithExercises = cats.map((cat) => {
    const catExercises = exercises.filter((exercise) => exercise.cat === cat);
    return [cat, catExercises];
  });

  return Object.fromEntries(catsWithExercises);
};

export { exerciseArrToCatObj };
