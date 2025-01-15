import type { Any } from '../../@types/types.ts';

function f(n?: Any): number | boolean {
  if (!Number.isInteger(n) || n < 1) {
    return false;
  }

  return (n * (n + 1)) / 2;
}

export default f;
