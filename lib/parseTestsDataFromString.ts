export type Test = {
  body: string;
  failMessage?: string;
  successMessage?: string;
};

const matchStringBetweenJsQuotes = (str: string) => {
  const reg = /(?<=\`\`\`js)(.|\r|\n)*?(?=\`\`\`)/g;

  return str.match(reg);
};

const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
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
      messages: isJsonString(messages) && JSON.parse(messages),
    }))
    .map(({ body, messages }) => ({
      body,
      failMessage: messages?.fail,
      successMessage: messages?.success,
      messages,
    }));
};

export default getTestWithMessages;
