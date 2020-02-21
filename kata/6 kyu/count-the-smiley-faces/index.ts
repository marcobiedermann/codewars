function countSmileys(arr: string[]): number {
  return arr.filter(face => /[:;][-~]?[)D]/.test(face)).length;
}

export default countSmileys;
