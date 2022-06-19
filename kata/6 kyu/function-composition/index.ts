function compose<T>(f: (...a: T[]) => T, g: (...b: T[]) => T) {
  return (...args: T[]) => f(g(...args));
}

export default compose;
