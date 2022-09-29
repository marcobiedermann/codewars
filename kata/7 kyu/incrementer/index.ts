function incrementer(nums: number[]): number[] {
  return nums.map((digit, index) => (digit + (index + 1)) % 10);
}

export default incrementer;
