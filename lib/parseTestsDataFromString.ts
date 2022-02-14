import isJSON from 'helpers/isJSON';

export type Test = {
  body: string;
  failMessage?: string;
  successMessage?: string;
};

const matchStringBetweenJsQuotes = (str: string) => {
  const reg = /(?<=\`\`\`js)(.|\r|\n)*?(?=\`\`\`)/g;

  return str.match(reg);
};

const getTestWithMessages = (str: string): Test[] | undefined => {
  const matches = matchStringBetweenJsQuotes(str);

  return matches
    ?.map((match) => match.split('// messages'))
    .map(([body, messages]) => ({
      body,
      messages,
    }))
    .map(({ body, messages }) => ({
      body,
      messages: isJSON(messages) && JSON.parse(messages),
    }))
    .map(({ body, messages }) => ({
      body,
      failMessage: messages?.fail,
      successMessage: messages?.success,
      messages,
    }));
};

export default getTestWithMessages;
