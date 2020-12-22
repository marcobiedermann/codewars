function preFizz(n: number): number[] {
  return Array.from({ length: n }, (_, index) => index + 1);
}

export default preFizz;
