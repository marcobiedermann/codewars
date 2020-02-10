function check<T = number | string>(a: T[], x: T): boolean {
  return a.includes(x);
}

export default check;
