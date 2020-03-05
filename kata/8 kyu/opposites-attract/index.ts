function isOdd(number: number): boolean {
  return number % 2 !== 0;
}

function lovefunc(flower1: number, flower2: number): boolean {
  return isOdd(flower1 + flower2);
}

export default lovefunc;
