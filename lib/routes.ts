const routes = {
  home: '/',
  exercises: '/exercises',
  exercise: (slug: string) => `/exercises/${slug}`,
  editExerciseOnGithub: (slug: string) =>
    `https://github.com/simpsonphile/js-challenge/edit/develop/_exercises/${slug}.md`,
};

export default routes;
