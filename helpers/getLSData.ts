import isJSON from 'helpers/isJSON';

const getLSData = (key: string) => {
  if (typeof window !== 'object') return;

  const data = window.localStorage.getItem(key);

  if (data && isJSON(data)) return JSON.parse(data);

  return undefined;
};

export default getLSData;
