export const getRandomNumber = (min, max)  => {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};
