function add(num1: number, num2: number): number {
  let a = num1;
  let b = num2;
  let result = '';

  while (a || b) {
    result = (a % 10) + (b % 10) + result;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  return parseInt(result, 10) || 0;
}

export default add;
