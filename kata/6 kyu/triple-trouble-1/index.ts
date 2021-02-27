function tripledouble(num1: number, num2: number): 0 | 1 {
  for (let i = 0; i < 10; i += 1) {
    const triple = new RegExp(`${i}{3}`);
    const double = new RegExp(`${i}{2}`);

    if (triple.test(num1.toString()) && double.test(num2.toString())) {
      return 1;
    }
  }

  return 0;
}

export default tripledouble;
