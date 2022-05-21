function spread<T>(func: (...a: T[]) => T, args: T[]) {
  return func(...args);
}

export default spread;
