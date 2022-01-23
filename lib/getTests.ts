const getTests = (str: string): string[] => {
  return str.split('// test').filter((test) => !!test);
};

export default getTests;
