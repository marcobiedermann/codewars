function lowercaseCount(str: string): number {
  return (str.match(/[a-z]/g) || []).length;
}

export default lowercaseCount;
