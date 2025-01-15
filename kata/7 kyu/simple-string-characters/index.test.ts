import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should count character group', () => {
    assert.deepEqual(solve('Codewars@codewars123.com'), [1, 18, 3, 2]);
    assert.deepEqual(solve('bgA5<1d-tOwUZTS8yQ'), [7, 6, 3, 2]);
    assert.deepEqual(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H'), [9, 9, 6, 9]);
    assert.deepEqual(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9]);
    assert.deepEqual(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe'), [10, 7, 3, 6]);
    assert.deepEqual(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft'), [7, 13, 4, 10]);
  });
});
