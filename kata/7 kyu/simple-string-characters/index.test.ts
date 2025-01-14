import { describe, expect, it } from 'vitest';
import solve from './index.ts';

describe('solve', () => {
  it('should count character group', () => {
    expect.assertions(6);

    expect(solve('Codewars@codewars123.com')).toStrictEqual([1, 18, 3, 2]);
    expect(solve('bgA5<1d-tOwUZTS8yQ')).toStrictEqual([7, 6, 3, 2]);
    expect(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H')).toStrictEqual([9, 9, 6, 9]);
    expect(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")).toStrictEqual([15, 8, 6, 9]);
    expect(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe')).toStrictEqual([10, 7, 3, 6]);
    expect(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft')).toStrictEqual([7, 13, 4, 10]);
  });
});
