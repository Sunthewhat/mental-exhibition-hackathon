const getValueFromLocalStorage = (key: string): string | null => {
  const value = window.localStorage.getItem(key);
  if (value === null) {
    console.log(`No value found in localStorage for key: ${key}`);
    return null;
  }

  return value;
};

export const getDisplayName = (): string | null => {
  return getValueFromLocalStorage("name");
};

export const getAnswers = (): number[] | null => {
  let answers = getValueFromLocalStorage("answers");

  if (!answers) return null;

  return JSON.parse(answers).map(function (item: string) {
    return parseInt(item);
  });
};

export const getScore = () => {
  const answers = getAnswers();

  if (!answers || answers.length === 0) return 0;

  let scores = 0;
  for (let score of answers) {
    if (isNaN(score)) continue;

    scores += score;
  }
  return scores;
};
