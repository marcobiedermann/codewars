function ArrowFunc(arr: number[]): string {
  return arr.map((code) => String.fromCharCode(code)).join('');
}

export default ArrowFunc;
