export type Test = {
  body: string;
  message?: string;
};

const getTestWithMessages = (str: string): Test[] => {
  return str
    .split('// test')
    .filter((test) => !!test)
    .map((test) => test.split('// message'))
    .map((test) => ({ body: test[0], message: test[1] }));
};

export default getTestWithMessages;
