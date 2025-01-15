import type { Any } from '../../@types/types.ts';

function prefill<T>(n: Any, v: T): T[] {
  const parsed = parseInt(n, 10);

  if (parsed !== Math.abs(n)) {
    throw new TypeError(`${n} is invalid`);
  }

  if (!parsed) {
    return [];
  }

  return Array(n).fill(v);
}

export default prefill;
