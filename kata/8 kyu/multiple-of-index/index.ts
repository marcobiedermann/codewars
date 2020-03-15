function multipleOfIndex(array: number[]): number[] {
  return array.filter((element, index) => element % index === 0);
}

export default multipleOfIndex;
