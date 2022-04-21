function dashatize(num: number): string {
  const stringified = num.toString();

  if (stringified === 'NaN') {
    return stringified;
  }

  const match = stringified.match(/[13579]|[02468]+/g) || [];

  return match.join('-');
}

export default dashatize;
