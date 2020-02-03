/* eslint-disable no-shadow */

function sqInRect(lng: number, wdth: number): number[] | null {
  if (lng === wdth) {
    return null;
  }

  function square(lng: number, wdth: number): number[] {
    if (lng === wdth) {
      return [lng];
    }

    const short = Math.min(lng, wdth);
    const long = Math.max(lng, wdth);

    return [short, ...square(short, long - short)];
  }

  return square(lng, wdth);
}

export default sqInRect;
