export const getRandomNumber = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export const gcd = (num1, num2) => {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let result = min;

  while (max % result > 0) {
    result = max % result;
    max = min;
    min = result;
  }

  return String(result);
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
