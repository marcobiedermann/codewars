/* eslint-disable camelcase */

function filter_list(l: any[]): number[] {
  return l.filter(Number.isInteger);
}

export default filter_list;
