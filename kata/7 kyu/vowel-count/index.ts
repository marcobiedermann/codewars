function getCount(str: string): number {
  return (str.match(/[aeiou]/g) || []).length;
}

export default getCount;
