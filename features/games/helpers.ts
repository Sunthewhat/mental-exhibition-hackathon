const isBrowser = typeof window !== "undefined";

const getValueFromLocalStorage = (key: string): string | null => {
  if (!isBrowser) {
    return null; // Or handle it differently in server-side context
  }

  const value = window.localStorage.getItem(key);
  console.log(value);
  if (value === null) {
    console.log(`No value found in localStorage for key: ${key}`);
    return null;
  }

  return value;
};
export const getDisplayName = (): string | null => {
  return getValueFromLocalStorage("name");
};
