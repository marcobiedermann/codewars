function trueOrFalse<T>(val: T): 'true' | 'false' {
  if (val) {
    return 'true';
  }

  return 'false';
}

export default trueOrFalse;
