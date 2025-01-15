import type { Any } from '../../@types/types.ts';

function filter_list(l: Any[]): number[] {
  return l.filter(Number.isInteger);
}

export default filter_list;
