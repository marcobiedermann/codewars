function getNumberFromString(s: string): number {
  return parseInt(s.replace(/\D/g, ''), 10);
}

export default getNumberFromString;
