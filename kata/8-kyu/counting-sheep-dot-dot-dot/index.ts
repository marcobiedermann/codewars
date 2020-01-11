function countSheeps(arrayOfSheep: boolean[]): number {
  return arrayOfSheep.filter(Boolean).length;
}

export default countSheeps;
