function subtract(a: number, b: number): number {
  return a - b;
}

function solution(nums: number[] | null): number[] {
  if (!nums) {
    return [];
  }

  return nums.sort(subtract);
}

export default solution;
