import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import menFromBoys from './index.ts';

describe('menFromBoys', () => {
  it('should sort out men from boys', () => {
    assert.deepEqual(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
    assert.deepEqual(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
    assert.deepEqual(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);
    assert.deepEqual(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85]);
    assert.deepEqual(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1]);
    assert.deepEqual(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41]);
    assert.deepEqual(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71]);
    assert.deepEqual(menFromBoys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99]);
    assert.deepEqual(
      menFromBoys([-53, -26, -53, -27, -49, -51, -14]),
      [-26, -14, -27, -49, -51, -53],
    );
    assert.deepEqual(
      menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]),
      [-86, -56, -30, -15, -17, -33, -45, -85],
    );
    assert.deepEqual(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89]);
    assert.deepEqual(menFromBoys([2, -43, 95, -90, 37]), [-90, 2, 95, 37, -43]);
    assert.deepEqual(menFromBoys([82, -61, -87, -12, 21, 1]), [-12, 82, 21, 1, -61, -87]);
    assert.deepEqual(menFromBoys([63, -57, 76, -85, 88, 2, -28]), [-28, 2, 76, 88, 63, -57, -85]);
    assert.deepEqual(
      menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]),
      [-282, 818, 900, 928, 281, 49, -1],
    );
  });
});
