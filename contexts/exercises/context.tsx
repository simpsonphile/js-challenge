import React from 'react';

export type Exercise = {
  id: string;
  fullSlug: string;
  slug: string;
  cat?: string | null;
  title?: string;
  hints?: string;
  solution?: string;
  code?: string;
  tests?: string;
  isPassed?: boolean;
};

export type ExerciseContextType = {
  exercises: Exercise[];
  getExerciseById: (id: string) => Exercise | undefined;
  getCompletedExercisesCount: () => number;
  getCategoryCompletedExercisesCount: (category: string) => number;
  getCategoryExercisesCount: (category: string) => number;
};

const defaultContext: ExerciseContextType = {
  exercises: [],
  getExerciseById: (id: string) => undefined,
  getCompletedExercisesCount: () => 0,
  getCategoryCompletedExercisesCount: (category: string) => 0,
  getCategoryExercisesCount: (category: string) => 0,
};

const ExerciseContext = React.createContext(defaultContext);

export { ExerciseContext };
