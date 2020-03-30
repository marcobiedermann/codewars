function inArray(array1: string[], array2: string[]): string[] {
  return array1.filter((needle) => array2.some((haystack) => haystack.includes(needle))).sort();
}

export default inArray;
