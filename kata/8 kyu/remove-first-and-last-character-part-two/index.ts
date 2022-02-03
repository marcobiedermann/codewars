function array(arr: string): string | null {
  return arr.split(',').slice(1, -1).join(' ') || null;
}

export default array;
