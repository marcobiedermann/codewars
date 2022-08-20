function divCon<T extends string | number>(x: T[]): number {
  return x.reduce(
    (accumulator, currentValue) =>
      typeof currentValue === 'number'
        ? accumulator + currentValue
        : accumulator - parseInt(currentValue, 10),
    0,
  );
}

export default divCon;
