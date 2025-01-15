import type { Any } from '../../@types/types.ts';

function findNeedle(haystack: Any[]): string {
  const position = haystack.indexOf('needle');

  return `found the needle at position ${position}`;
}

export default findNeedle;
