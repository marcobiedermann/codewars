function countSheep(num: number): string {
  return Array.from({ length: num }, (_, index) => `${index + 1} sheep...`).join('');
}

export default countSheep;
