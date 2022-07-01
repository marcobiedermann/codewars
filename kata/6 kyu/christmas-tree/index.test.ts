import { expect } from 'vitest';
import christmasTree from '.';

describe('christmasTree', () => {
  it('should return a christmas tree of the correct hight', () => {
    expect(JSON.stringify(christmasTree(0))).toBe('""');
    expect(JSON.stringify(christmasTree(1))).toBe('"*"');
    expect(JSON.stringify(christmasTree(2))).toBe('" * \\n***"');
    expect(JSON.stringify(christmasTree(3))).toBe('"  *  \\n *** \\n*****"');
    expect(JSON.stringify(christmasTree(4))).toBe('"   *   \\n  ***  \\n ***** \\n*******"');
    expect(JSON.stringify(christmasTree(5))).toBe(
      '"    *    \\n   ***   \\n  *****  \\n ******* \\n*********"',
    );
    expect(JSON.stringify(christmasTree(6))).toBe(
      '"     *     \\n    ***    \\n   *****   \\n  *******  \\n ********* \\n***********"',
    );
    expect(JSON.stringify(christmasTree(7))).toBe(
      '"      *      \\n     ***     \\n    *****    \\n   *******   \\n  *********  \\n *********** \\n*************"',
    );
    expect(JSON.stringify(christmasTree(8))).toBe(
      '"       *       \\n      ***      \\n     *****     \\n    *******    \\n   *********   \\n  ***********  \\n ************* \\n***************"',
    );
    expect(JSON.stringify(christmasTree(9))).toBe(
      '"        *        \\n       ***       \\n      *****      \\n     *******     \\n    *********    \\n   ***********   \\n  *************  \\n *************** \\n*****************"',
    );
    expect(JSON.stringify(christmasTree(10))).toBe(
      '"         *         \\n        ***        \\n       *****       \\n      *******      \\n     *********     \\n    ***********    \\n   *************   \\n  ***************  \\n ***************** \\n*******************"',
    );
  });
});
