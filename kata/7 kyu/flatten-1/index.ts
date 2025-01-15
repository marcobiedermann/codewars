import type { Any } from '../../@types/types.ts';

function flatten(arr: Any[]): Any[] {
  return [].concat(...arr);
}

export default flatten;
