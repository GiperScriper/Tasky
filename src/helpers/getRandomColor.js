export const getRandomColor = colors => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
};
