export const getStorage = (key: string) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const setStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
