import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import christmasTree from './index.ts';

describe('christmasTree', () => {
  it('should return a christmas tree of the correct hight', () => {
    assert.strictEqual(JSON.stringify(christmasTree(0)), '""');
    assert.strictEqual(JSON.stringify(christmasTree(1)), '"*"');
    assert.strictEqual(JSON.stringify(christmasTree(2)), '" * \\n***"');
    assert.strictEqual(JSON.stringify(christmasTree(3)), '"  *  \\n *** \\n*****"');
    assert.strictEqual(JSON.stringify(christmasTree(4)), '"   *   \\n  ***  \\n ***** \\n*******"');
    assert.strictEqual(
      JSON.stringify(christmasTree(5)),
      '"    *    \\n   ***   \\n  *****  \\n ******* \\n*********"',
    );
    assert.strictEqual(
      JSON.stringify(christmasTree(6)),
      '"     *     \\n    ***    \\n   *****   \\n  *******  \\n ********* \\n***********"',
    );
    assert.strictEqual(
      JSON.stringify(christmasTree(7)),
      '"      *      \\n     ***     \\n    *****    \\n   *******   \\n  *********  \\n *********** \\n*************"',
    );
    assert.strictEqual(
      JSON.stringify(christmasTree(8)),
      '"       *       \\n      ***      \\n     *****     \\n    *******    \\n   *********   \\n  ***********  \\n ************* \\n***************"',
    );
    assert.strictEqual(
      JSON.stringify(christmasTree(9)),
      '"        *        \\n       ***       \\n      *****      \\n     *******     \\n    *********    \\n   ***********   \\n  *************  \\n *************** \\n*****************"',
    );
    assert.strictEqual(
      JSON.stringify(christmasTree(10)),
      '"         *         \\n        ***        \\n       *****       \\n      *******      \\n     *********     \\n    ***********    \\n   *************   \\n  ***************  \\n ***************** \\n*******************"',
    );
  });
});
