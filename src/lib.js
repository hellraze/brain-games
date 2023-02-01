export default (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const generateArrayOfProg = (firstElem, diffOfProg) => {
  const arrayOfNumbers = [firstElem];
  let nextNumOfProg = firstElem;
  for (let i = 9; i > 0; i -= 1) {
    nextNumOfProg += diffOfProg;
    arrayOfNumbers.push(nextNumOfProg);
  }
  return arrayOfNumbers;
};
