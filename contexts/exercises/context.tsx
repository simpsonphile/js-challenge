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
  userCode?: string;
};

export type ExerciseContextType = {
  exercises: Exercise[];
  getExerciseById: (id: string) => Exercise | undefined;
  getCompletedExercisesCount: () => number;
  getCategoryCompletedExercisesCount: (category: string) => number;
  getCategoryExercisesCount: (category: string) => number;
  setExerciseStatus: (id: string, data: boolean) => void;
  setExerciseCode: (id: string, data: string) => void;
};

const ExerciseContext = React.createContext<ExerciseContextType>(
  {} as ExerciseContextType
);

export { ExerciseContext };
