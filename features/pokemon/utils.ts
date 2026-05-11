export const getRandomPaleColor = () => {
  const r = Math.floor(Math.random() * 56) + 200;
  const g = Math.floor(Math.random() * 56) + 200;
  const b = Math.floor(Math.random() * 56) + 200;

  return `rgb(${r}, ${g}, ${b})`;
};
